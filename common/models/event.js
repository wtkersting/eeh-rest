module.exports = function(Event) {
    Event.disableRemoteMethod('create', true);               
    Event.disableRemoteMethod('upsert', true);                
    Event.disableRemoteMethod('deleteById', true);         
    Event.disableRemoteMethod("updateAll", true);            
    Event.disableRemoteMethod("updateAttributes", false);       
    Event.disableRemoteMethod('createChangeStream', true);    
    Event.disableRemoteMethod('exists', true);
    Event.disableRemoteMethod('findById', true);
    Event.disableRemoteMethod('findOne', true);
    Event.disableRemoteMethod('count', true);

};
