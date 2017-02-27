module.exports = function(CatalogVersion) {
    CatalogVersion.disableRemoteMethod('create', true);               
    CatalogVersion.disableRemoteMethod('upsert', true);              
    CatalogVersion.disableRemoteMethod('deleteById', true);          
    CatalogVersion.disableRemoteMethod("updateAll", true);            
    CatalogVersion.disableRemoteMethod("updateAttributes", false);      
    CatalogVersion.disableRemoteMethod('createChangeStream', true);    
    CatalogVersion.disableRemoteMethod('exists', true);
    CatalogVersion.disableRemoteMethod('findById', true);
    CatalogVersion.disableRemoteMethod('findOne', true);
    CatalogVersion.disableRemoteMethod('count', true);
};
