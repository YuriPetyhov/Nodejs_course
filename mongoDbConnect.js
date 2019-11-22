const mongoDb = require('mongodb')
const MongoClient = mongoDb.MongoClient
const dbConfig = require('./dbConfig')

let _db = null;
const mongoConnect = cb => {
  MongoClient.connect(dbConfig.uri)
    .then((client) => {
      console.log('Connected')
      _db = client.db()
      cb()
    } )
    .catch(err => console.error(err))
}

const getDb = () => {
 return  _db ? _db : console.error("No Db")
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
