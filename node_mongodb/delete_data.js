const config = require('./config');

config.MongoClient.connect(config.url, function(err, db) {
	if(err) {
		throw err;
	}
	var dbase = db.db('test');
	var whereStr = {
		'name': 'hello'
	};
	dbase.collection('info_test').deleteOne(whereStr, function(err, res) {
		if(err) {
			throw err;
		}
		console.log('数据删除成功！');
		db.close();
	})
})
