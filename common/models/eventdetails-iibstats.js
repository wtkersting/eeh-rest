module.exports = function(EventDetailsIibStats) {
	EventDetailsIibStats.disableRemoteMethod('create', true);               
	EventDetailsIibStats.disableRemoteMethod('upsert', true);                
	EventDetailsIibStats.disableRemoteMethod('deleteById', true);         
	EventDetailsIibStats.disableRemoteMethod("updateAll", true);            
	EventDetailsIibStats.disableRemoteMethod("updateAttributes", false);       
	EventDetailsIibStats.disableRemoteMethod('createChangeStream', true);    
	EventDetailsIibStats.disableRemoteMethod('exists', true);
	EventDetailsIibStats.disableRemoteMethod('findById', true);
	EventDetailsIibStats.disableRemoteMethod('findOne', true);
	EventDetailsIibStats.disableRemoteMethod('count', true);
};
