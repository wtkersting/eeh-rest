module.exports = function(EventQuery) {
    EventQuery.disableRemoteMethod('create', false);               
    EventQuery.disableRemoteMethod('upsert', false);                
    EventQuery.disableRemoteMethod('deleteById', false);         
    EventQuery.disableRemoteMethod("updateAll", true);            
    EventQuery.disableRemoteMethod("updateAttributes", false);       
    EventQuery.disableRemoteMethod('createChangeStream', true);    
    EventQuery.disableRemoteMethod('exists', true);
    EventQuery.disableRemoteMethod('findById', true);
    EventQuery.disableRemoteMethod('findOne', true);
    EventQuery.disableRemoteMethod('count', true);

};
