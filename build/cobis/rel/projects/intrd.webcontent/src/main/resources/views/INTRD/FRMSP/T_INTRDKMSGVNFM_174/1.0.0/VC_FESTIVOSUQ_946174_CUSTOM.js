/* variables locales de T_INTRDKMSGVNFM_174*/

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

    
        var task = designerEvents.api.formfestivos;
    

    //"TaskId": "T_INTRDKMSGVNFM_174"


    	

//Entity: DiaFeriado
//DiaFeriado. (Button) View: FormFestivos
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONIXHHGDZ_257121 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.DiaFeriado = true;

};

	
//Start signature to Callback event to VA_VABUTTONIXHHGDZ_257121
task.executeCommandCallback.VA_VABUTTONIXHHGDZ_257121 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
};




}));
