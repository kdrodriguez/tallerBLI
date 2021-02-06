/* variables locales de T_INTRDJEEIIIOD_692*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.formimpresora;
    

    //"TaskId": "T_INTRDJEEIIIOD_692"


    	

//Entity: Impresora
//Impresora. (Button) View: FormImpresora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONHCXHCLK_743799 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Impresora = true;

};

	
//Start signature to Callback event to VA_VABUTTONHCXHCLK_743799
task.executeCommandCallback.VA_VABUTTONHCXHCLK_743799 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
};




}));
