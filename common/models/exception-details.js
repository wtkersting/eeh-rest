module.exports = function(ExceptionDetails) {
    ExceptionDetails.disableRemoteMethod('create', true);               
    ExceptionDetails.disableRemoteMethod('upsert', true);                
    ExceptionDetails.disableRemoteMethod('deleteById', true);         
    ExceptionDetails.disableRemoteMethod("updateAll", true);            
    ExceptionDetails.disableRemoteMethod("updateAttributes", false);       
    ExceptionDetails.disableRemoteMethod('createChangeStream', true);    
    ExceptionDetails.disableRemoteMethod('exists', true);
    ExceptionDetails.disableRemoteMethod('findById', true);
    ExceptionDetails.disableRemoteMethod('findOne', true);
    ExceptionDetails.disableRemoteMethod('count', true);

};
