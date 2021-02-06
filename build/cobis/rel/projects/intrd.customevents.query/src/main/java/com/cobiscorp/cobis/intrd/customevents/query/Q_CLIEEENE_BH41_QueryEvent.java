/*
 * Archivo: Q_CLIEEENE_BH41_QueryEvent.java
 * Fecha: 05-feb-2021 21:39:49
 *
 * Esta aplicacion es parte de los paquetes bancarios propiedad de COBISCORP.
 * Su uso no autorizado queda expresamente prohibido asi como cualquier
 * alteracion o agregado hecho por alguno de sus usuarios sin el debido
 * consentimiento por escrito de COBISCORP.
 * Este programa esta protegido por la ley de derechos de autor y por las
 * convenciones internacionales de propiedad intelectual. Su uso no
 * autorizado dara derecho a COBISCORP para obtener ordenes de secuestro
 * o retencion y para perseguir penalmente a los autores de cualquier infraccion.
 */

package com.cobiscorp.cobis.intrd.customevents.query;

import java.util.List;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;

import com.cobiscorp.cobis.commons.domains.log.ILogger;
import com.cobiscorp.cobis.commons.log.LogFactory;
import com.cobiscorp.designer.api.DataEntity;
import com.cobiscorp.designer.api.DynamicRequest;
import com.cobiscorp.designer.api.builder.QueryEventBuilder;
import com.cobiscorp.designer.api.customization.*;
import com.cobiscorp.designer.api.customization.arguments.*;
import com.cobiscorp.designer.api.managers.DesignerManagerException;

/**
 * Personalizacion de Eventos del Query
 *
 * Q_CLIEEENE_BH41_QueryEvent - ClienteQuery
 *
 */
@Component
@Service({QueryEventBuilder.class})
@Properties(value={
		@Property(name = "query.id", value = "Q_CLIEEENE_BH41"),
		@Property(name = "query.version", value = "1.0.0")
})
public class Q_CLIEEENE_BH41_QueryEvent extends QueryEventBuilder
 implements IExecuteQuery
{

	/**
	 * Instancia de Logger
	 */
	private static final ILogger logger = LogFactory.getLogger(Q_CLIEEENE_BH41_QueryEvent.class);
	
	@Reference(name="iExecuteQueryQ_CLIEEENE_BH41",referenceInterface =IExecuteQuery.class,bind = "setiExecuteQueryQ_CLIEEENE_BH41",unbind = "unsetiExecuteQueryQ_CLIEEENE_BH41",cardinality = ReferenceCardinality.MANDATORY_UNARY,policy=ReferencePolicy.DYNAMIC,target="(&(query.version=1.0.0)(query.id=Q_CLIEEENE_BH41))")
	private IExecuteQuery iExecuteQueryQ_CLIEEENE_BH41;

	public void setiExecuteQueryQ_CLIEEENE_BH41(IExecuteQuery iExecuteQueryQ_CLIEEENE_BH41) {
		this.iExecuteQueryQ_CLIEEENE_BH41 = iExecuteQueryQ_CLIEEENE_BH41;
	}

	public void unsetiExecuteQueryQ_CLIEEENE_BH41(IExecuteQuery iExecuteQueryQ_CLIEEENE_BH41) {
		this.iExecuteQueryQ_CLIEEENE_BH41 = iExecuteQueryQ_CLIEEENE_BH41;
	}

	@Reference(bind = "setBLI1216_bli_busquedacliente", unbind = "unsetBLI1216_bli_busquedacliente", cardinality = ReferenceCardinality.MANDATORY_UNARY,target="(bli.id=BLI1216_bli_busquedacliente)")
	private com.cobiscorp.designer.bli.api.IBLIExecutor bLI1216_bli_busquedacliente;
	public void setBLI1216_bli_busquedacliente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI1216_bli_busquedacliente) {
		this.bLI1216_bli_busquedacliente = bLI1216_bli_busquedacliente;
	}
	public void unsetBLI1216_bli_busquedacliente(com.cobiscorp.designer.bli.api.IBLIExecutor bLI1216_bli_busquedacliente) {
		this.bLI1216_bli_busquedacliente = null;
	}
	@Override
	public List<?> executeDataEvent(DynamicRequest arg0, IExecuteQueryEventArgs arg1) {
		List<?> lst = null;
		try {
			bLI1216_bli_busquedacliente.execute(arg0);
			lst = iExecuteQueryQ_CLIEEENE_BH41.executeDataEvent(arg0, arg1);
		} catch (Exception ex) {
			arg1.setSuccess(false);
			DesignerManagerException.handleException(arg1.getMessageManager(), ex, logger);
		}
		return lst;
	}


	@Override
	public void configure() {
	    this.addQueryEvent("Q_CLIEEENE_BH41", this);
	}

}

