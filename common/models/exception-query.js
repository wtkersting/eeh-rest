module.exports = function(ExceptionQuery) {
    ExceptionQuery.disableRemoteMethod('create', false);               
    ExceptionQuery.disableRemoteMethod('upsert', false);                
    ExceptionQuery.disableRemoteMethod('deleteById', false);         
    ExceptionQuery.disableRemoteMethod("updateAll", true);            
    ExceptionQuery.disableRemoteMethod("updateAttributes", false);       
    ExceptionQuery.disableRemoteMethod('createChangeStream', true);    
    ExceptionQuery.disableRemoteMethod('exists', true);
    ExceptionQuery.disableRemoteMethod('findById', true);
    ExceptionQuery.disableRemoteMethod('findOne', true);
    ExceptionQuery.disableRemoteMethod('count', true);

};
