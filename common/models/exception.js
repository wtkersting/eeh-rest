module.exports = function(Exception) {
    Exception.disableRemoteMethod('create', true);               
    Exception.disableRemoteMethod('upsert', true);                
    Exception.disableRemoteMethod('deleteById', true);         
    Exception.disableRemoteMethod("updateAll", true);            
    Exception.disableRemoteMethod("updateAttributes", false);       
    Exception.disableRemoteMethod('createChangeStream', true);    
    Exception.disableRemoteMethod('exists', true);
    Exception.disableRemoteMethod('findById', true);
    Exception.disableRemoteMethod('findOne', true);
    Exception.disableRemoteMethod('count', true);
};
