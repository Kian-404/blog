const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test'
var config = {
	MongoClient,
	url
}

module.exports = config