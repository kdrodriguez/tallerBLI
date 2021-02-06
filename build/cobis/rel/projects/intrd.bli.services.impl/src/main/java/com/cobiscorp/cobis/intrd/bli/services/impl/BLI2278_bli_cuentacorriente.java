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

import com.cobiscorp.cobis.intrd.model.Cuenta;

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
  @Property(name = "bli.id", value = "BLI2278_bli_cuentacorriente")
})
public class BLI2278_bli_cuentacorriente implements IBLIExecutor {
  private static final ILogger logger = LogFactory.getLogger(BLI2278_bli_cuentacorriente.class);

  public void execute(DynamicRequest dynamicRequest) {
    Mapper mapper = null;
    try {
      DataEntity row = BLIUtils.getRowDataEntity(dynamicRequest);
      List<Object> outListEntities = new ArrayList<Object>();
      DataEntity rowCuenta;
      if (row != null && Cuenta.ENTITY_NAME.equals(row.getEntityName())) {
        rowCuenta = row;
      } else {
        rowCuenta = BLIUtils.getDataEntity(dynamicRequest, Cuenta.ENTITY_NAME);
        if (rowCuenta == null) {
          throw new DesignerRuntimeException("No existe entidad " + Cuenta.ENTITY_NAME);
        }
      }

      Double wsaldo = rowCuenta.get(Cuenta.SALDO);
      String wnumeroCuenta = rowCuenta.get(Cuenta.NUMEROCUENTA);
      String wcodigoCliente = rowCuenta.get(Cuenta.CODIGOCLIENTE);

      if (logger.isDebugEnabled()) {
        logger.logDebug("inputParameters: " + " SALDO: " + wsaldo + " NUMEROCUENTA: " + wnumeroCuenta + " CODIGOCLIENTE: " + wcodigoCliente);
      }

      mapper = MapperManager.get(Mapper.class);
      mapper.addInputParameter("@t_trn", SqlType.INT, "2518");

      if (wsaldo != null){
        mapper.addInputParameter("@i_saldo", SqlType.DOUBLE, BLIUtils.convertToType(wsaldo, String.class));
      }

      if (wnumeroCuenta != null){
        mapper.addInputParameter("@i_numero_cuenta", SqlType.VARCHAR, BLIUtils.convertToType(wnumeroCuenta, String.class));
      }

      if (wcodigoCliente != null){
        mapper.addInputParameter("@i_ced_cliente", SqlType.VARCHAR, BLIUtils.convertToType(wcodigoCliente, String.class));
      }
      mapper.addInputParameter("@i_operacion", SqlType.CHAR, "I");
      boolean ret = mapper.execute(".cobis.g1_sp_cuenta_corriente");
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
