

//Entity: Cuenta
//Cuenta. (Button) View: CuentaNueva
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONIYYTDEV_625338 = function(  entities, executeCommandEventArgs ) {

    //executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Cuenta = true;
    
     // Generar Num cuenta aleatorio
    let saldo = entities.Cuenta.saldo;
    let msgError="Error, el saldo debe ser mayor a 0";
    
    if(saldo <= 0 ){
        //executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("Exito");
        executeCommandEventArgs.commons.messageHandler.showMessagesError(msgError);
        executeCommandEventArgs.commons.execServer = false;
        return;
    }
    
    const obtenerNumeroCuenta = () => {
        return Math.floor(Math.random() * 1000000000 + 1000000000);
    } 
    
    entities.Cuenta.numeroCuenta = obtenerNumeroCuenta(); 
    entities.Cuenta.codigoCliente = entities.Cliente._data[0].cedula;
    
        executeCommandEventArgs.commons.execServer = true;

    
    // 

};