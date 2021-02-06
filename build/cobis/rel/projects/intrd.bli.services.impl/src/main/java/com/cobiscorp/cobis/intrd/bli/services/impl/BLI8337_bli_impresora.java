package com.cobiscorp.cobis.intrd.bli.services.impl;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.cobiscorp.cobis.cwc.context.MapperManager;
import com.cobiscorp.cobis.cwc.kernel.sp.dto.MapperResult;
import com.cobiscorp.cobis.cwc.kernel.sp.impl.ExecutorSP;

import com.cobiscorp.cobis.intrd.model.Impresora;

import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DataEntityList;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.bli.util.BLIUtils;
import com.cobiscorp.designer.bli.api.IBLIExecutor;
import com.cobiscorp.designer.exception.DesignerRuntimeException;
import com.cobiscorp.designer.bli.manager.BliManagerException;
import com.cobiscorp.cobis.cwc.server.information.ServerParamUtil;
import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.ecobis.map.Mapper;
import com.cobiscorp.ecobis.map.dto.Result;
import com.cobiscorp.ecobis.map.enums.SqlType;

@Component
@Service({ IBLIExecutor.class })
@Properties({
  @Property(name = "task.module", value = "INTRD"),
  @Property(name = "bli.id", value = "BLI8337_bli_impresora")
})
public class BLI8337_bli_impresora implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI8337_bli_impresora.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowImpresora;
      if (row != null && Impresora.ENTITY_NAME.equals(row.getEntityName())) {
        rowImpresora = row;
      } else {
        rowImpresora = BLIUtils.getDataEntity(dynamicRequest, Impresora.ENTITY_NAME);
        if (rowImpresora == null) {
          throw new DesignerRuntimeException("No existe entidad " + Impresora.ENTITY_NAME);
        }
      }

      String wubicacion = rowImpresora.get(Impresora.UBICACION);
      String wcomando = rowImpresora.get(Impresora.COMANDO);
      String wnombre = rowImpresora.get(Impresora.NOMBRE);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " UBICACION: " + wubicacion + " COMANDO: " + wcomando + " NOMBRE: " + wnombre);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.SMALLINT, "8106");
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "I");

      if (wubicacion != null){
        mapper.addInputParameter("@i_ubicacion", SqlType.VARCHAR, BLIUtils.convertToType(wubicacion, String.class));
      }

      if (wcomando != null){
        mapper.addInputParameter("@i_comando", SqlType.VARCHAR, BLIUtils.convertToType(wcomando, String.class));
      }

      if (wnombre != null){
        mapper.addInputParameter("@i_nombre", SqlType.VARCHAR, BLIUtils.convertToType(wnombre, String.class));
      }
      boolean ret = mapper.execute(".cobis.sp_impresora");
      int retCode = mapper.returnCode();
      if (ret && (retCode == 0)) {




        if (logger.isDebugEnabled()) {
          logger.logDebug("returnCode: " + retCode);
        }
      } else {
        BliManagerException.handleMapperException(mapper);
      }
    } catch (Exception ex) {
      BliManagerException.handleBliException(ex);
    } finally {
      if (mapper != null)
        mapper.check();
    }
  }

}
