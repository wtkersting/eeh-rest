module.exports = function(ExceptionMessage) {
    ExceptionMessage.disableRemoteMethod('create', false);               
    ExceptionMessage.disableRemoteMethod('upsert', true);                
    ExceptionMessage.disableRemoteMethod('deleteById', true);         
    ExceptionMessage.disableRemoteMethod("updateAll", true);            
    ExceptionMessage.disableRemoteMethod("updateAttributes", false);       
    ExceptionMessage.disableRemoteMethod('createChangeStream', true);    
    ExceptionMessage.disableRemoteMethod('exists', true);
    ExceptionMessage.disableRemoteMethod('findById', true);
    ExceptionMessage.disableRemoteMethod('findOne', true);
    ExceptionMessage.disableRemoteMethod('count', true);

};
