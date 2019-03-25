// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017/test'
const config = require('./config');

config.MongoClient.connect(config.url, function(err, db) {
	if(err) {
		throw err;
	}
	var dbase = db.db('test');
	var user = [
		{
			name: 'kian',
			age: '24'
		},
		{
			name: 'hello',
			age:'20'
		},
		{
			name: 'Jack',
			age:'18'
		}
	];
	dbase.collection('info_test').insertMany(user, function(err, res) {
		if(err) {
			throw err;
		}
		console.log(`数据插入成功！共${res.insertedCount}条`);
		db.close();
	})
})

// insertOne 插入一条记录
// insertMany 插入多条记录
