module.exports = function(ExceptionCatalog) {
    ExceptionCatalog.disableRemoteMethod('create', true);               
    ExceptionCatalog.disableRemoteMethod('upsert', true);                
    ExceptionCatalog.disableRemoteMethod('deleteById', true);         
    ExceptionCatalog.disableRemoteMethod("updateAll", true);            
    ExceptionCatalog.disableRemoteMethod("updateAttributes", false);       
    ExceptionCatalog.disableRemoteMethod('createChangeStream', true);    
    ExceptionCatalog.disableRemoteMethod('exists', true);
    ExceptionCatalog.disableRemoteMethod('findById', true);
    ExceptionCatalog.disableRemoteMethod('findOne', true);
    ExceptionCatalog.disableRemoteMethod('count', true);

};
