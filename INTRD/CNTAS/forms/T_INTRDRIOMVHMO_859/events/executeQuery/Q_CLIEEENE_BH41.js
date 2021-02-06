
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEEENE_BH41 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
    
    executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.BusquedaCliente.codigo
};