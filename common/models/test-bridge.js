module.exports = function(TestBridge) {
	TestBridge.getJavaObject = function(data, cb) {

		cb(null, "{hello: 'Hello World - '"+data+"}");
	};//End getJavaObject


	//Set up remote method
	TestBridge.remoteMethod('getJavaObject', {
		http: {path: '/getJavaObject', verb: 'get'},
		accepts: [
			{arg: 'data', type: 'JSON'}
		],
		returns: {arg: 'TestBridge', type: 'JSON'}
	}
	);

};
