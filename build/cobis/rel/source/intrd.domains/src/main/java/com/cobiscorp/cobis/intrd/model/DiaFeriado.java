package com.cobiscorp.cobis.intrd.model;

import java.util.ArrayList;
import java.util.List;
import com.cobiscorp.designer.api.Property;

public class DiaFeriado {

	public static final String EN_DIAFERIAD_405 = "EN_DIAFERIAD_405";
	
	public static final String VERSION = "1.0.0";
	
	public static final String ENTITY_NAME = "DiaFeriado";
	
	
	public static final Property<Integer> CIUDAD = new Property<Integer>("ciudad", Integer.class, false);
	
	public static final Property<Integer> MES = new Property<Integer>("mes", Integer.class, false);
	
	public static final Property<Integer> DIA = new Property<Integer>("dia", Integer.class, false);
	
	public static final Property<Integer> ANIO = new Property<Integer>("anio", Integer.class, false);
	
	public static final List<Property<?>> getPks() {
		List<Property<?>> pks = new ArrayList<Property<?>>();
		return pks;
	}

}
