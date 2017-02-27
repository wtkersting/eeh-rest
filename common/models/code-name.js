module.exports = function(CodeName) {
    CodeName.disableRemoteMethod('create', true);               
    CodeName.disableRemoteMethod('upsert', true);                
    CodeName.disableRemoteMethod('deleteById', true);         
    CodeName.disableRemoteMethod("updateAll", true);            
    CodeName.disableRemoteMethod("updateAttributes", false);       
    CodeName.disableRemoteMethod('createChangeStream', true);    
    CodeName.disableRemoteMethod('exists', true);
    CodeName.disableRemoteMethod('findById', true);
    CodeName.disableRemoteMethod('findOne', true);
    CodeName.disableRemoteMethod('count', true);
};
