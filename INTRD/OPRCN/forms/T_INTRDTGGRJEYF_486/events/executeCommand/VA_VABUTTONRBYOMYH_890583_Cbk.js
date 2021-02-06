
//Start signature to Callback event to VA_VABUTTONRBYOMYH_890583
task.executeCommandCallback.VA_VABUTTONRBYOMYH_890583 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    
    if(executeCommandCallbackEventArgs.success){
       executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess("Campos vacíos");
       }
};
