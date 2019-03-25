
const config = require('./config');

const dbName = 'test';

const collectionName = 'info_test'

config.MongoClient.connect(config.url, (err, db) => {
	if(err) {
		throw err;
	}
	const dbase = db.db(dbName);
	dbase.collection(collectionName).find({}).toArray((err, res) =>{
		if(err) {
			throw err;
		}
		console.log(res);
		db.close();
	})
})