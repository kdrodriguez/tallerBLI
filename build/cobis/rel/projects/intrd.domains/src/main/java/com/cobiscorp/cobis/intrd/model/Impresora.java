package com.cobiscorp.cobis.intrd.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class Impresora {

	public static final String EN_IMPRESOAA_384 = "EN_IMPRESOAA_384";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "Impresora";
	
	
	public static final Property<String> COMANDO = new Property<String>("comando", String.class, false);
	
	public static final Property<String> NOMBRE = new Property<String>("nombre", String.class, false);
	
	public static final Property<String> UBICACION = new Property<String>("ubicacion", String.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
