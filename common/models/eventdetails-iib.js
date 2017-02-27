module.exports = function(EventDetailsIib) {
    EventDetailsIib.disableRemoteMethod('create', true);               
    EventDetailsIib.disableRemoteMethod('upsert', true);                
    EventDetailsIib.disableRemoteMethod('deleteById', true);         
    EventDetailsIib.disableRemoteMethod("updateAll", true);            
    EventDetailsIib.disableRemoteMethod("updateAttributes", false);       
    EventDetailsIib.disableRemoteMethod('createChangeStream', true);    
    EventDetailsIib.disableRemoteMethod('exists', true);
    EventDetailsIib.disableRemoteMethod('findById', true);
    EventDetailsIib.disableRemoteMethod('findOne', true);
    EventDetailsIib.disableRemoteMethod('count', true);
};
