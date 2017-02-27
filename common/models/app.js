module.exports = function(App) {
    App.disableRemoteMethod('create', true);               
    App.disableRemoteMethod('upsert', true);                
    App.disableRemoteMethod('deleteById', true);         
    App.disableRemoteMethod("updateAll", true);            
    App.disableRemoteMethod("updateAttributes", false);       
    App.disableRemoteMethod('createChangeStream', true);    
    App.disableRemoteMethod('exists', true);
    App.disableRemoteMethod('findById', true);
    App.disableRemoteMethod('findOne', true);
    App.disableRemoteMethod('count', true);
};
