

//Entity: Cuenta
//Cuenta.tipoCuenta (ComboBox) View: CuentaNueva
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_9859NTTCYFCCWKT_867338 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    
    let valor = changedEventArgs.newValue;
    if(valor==="A"){
       changedEventArgs.commons.api.viewState.show("VA_VABUTTONJNAQLEF_769338");
        changedEventArgs.commons.api.viewState.hide("VA_VABUTTONIYYTDEV_625338");
    }else{
        changedEventArgs.commons.api.viewState.show("VA_VABUTTONIYYTDEV_625338");
        changedEventArgs.commons.api.viewState.hide("VA_VABUTTONJNAQLEF_769338");
    }

};