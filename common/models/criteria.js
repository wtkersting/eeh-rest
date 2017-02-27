module.exports = function(Criteria) {
    //Criteria.disableRemoteMethod('create', true);               
    //Criteria.disableRemoteMethod('upsert', true);                
    Criteria.disableRemoteMethod('deleteById', true);         
    Criteria.disableRemoteMethod("updateAll", true);            
    Criteria.disableRemoteMethod("updateAttributes", false);       
    Criteria.disableRemoteMethod('createChangeStream', true);    
    Criteria.disableRemoteMethod('exists', true);
    Criteria.disableRemoteMethod('findById', true);
    Criteria.disableRemoteMethod('findOne', true);
    Criteria.disableRemoteMethod('count', true);
};
