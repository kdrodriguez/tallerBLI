
//Start signature to Callback event to VA_VABUTTONZYRCTVT_165583
task.executeCommandCallback.VA_VABUTTONZYRCTVT_165583 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    if(executeCommandCallbackEventArgs.success){
       executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess("Suma realizada con exito");
       }
};
