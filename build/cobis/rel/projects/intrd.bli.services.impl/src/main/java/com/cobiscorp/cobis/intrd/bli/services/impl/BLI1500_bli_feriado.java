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

import com.cobiscorp.cobis.intrd.model.DiaFeriado;

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
  @Property(name = "bli.id", value = "BLI1500_bli_feriado")
})
public class BLI1500_bli_feriado implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI1500_bli_feriado.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowDiaFeriado;
      if (row != null && DiaFeriado.ENTITY_NAME.equals(row.getEntityName())) {
        rowDiaFeriado = row;
      } else {
        rowDiaFeriado = BLIUtils.getDataEntity(dynamicRequest, DiaFeriado.ENTITY_NAME);
        if (rowDiaFeriado == null) {
          throw new DesignerRuntimeException("No existe entidad " + DiaFeriado.ENTITY_NAME);
        }
      }

      Integer wanio = rowDiaFeriado.get(DiaFeriado.ANIO);
      Integer wmes = rowDiaFeriado.get(DiaFeriado.MES);
      Integer wdia = rowDiaFeriado.get(DiaFeriado.DIA);
      Integer wciudad = rowDiaFeriado.get(DiaFeriado.CIUDAD);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " ANIO: " + wanio + " MES: " + wmes + " DIA: " + wdia + " CIUDAD: " + wciudad);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.SMALLINT, "594");
      mapper.addInputParameter("@i_operacion", SqlType.VARCHAR, "I");

      if (wanio != null){
        mapper.addInputParameter("@i_anio", SqlType.SMALLINT, BLIUtils.convertToType(wanio, String.class));
      }

      if (wmes != null){
        mapper.addInputParameter("@i_mes", SqlType.TINYINT, BLIUtils.convertToType(wmes, String.class));
      }

      if (wdia != null){
        mapper.addInputParameter("@i_dia", SqlType.TINYINT, BLIUtils.convertToType(wdia, String.class));
      }

      if (wciudad != null){
        mapper.addInputParameter("@i_ciudad", SqlType.SMALLINT, BLIUtils.convertToType(wciudad, String.class));
      }
      boolean ret = mapper.execute(".cobis.sp_feriados");
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
