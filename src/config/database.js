const MongoClient = require('mongodb').MongoClient
const mongo = require('mongodb')

require('dotenv').config()

var _conn

MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(client => { _conn = client.db(process.env.DB_NAME) })
  .catch(err => console.log(err))

function findAll (collection, callback) {
  _conn.collection(collection).find({}).toArray(callback)
}

function findById (collection, id) {
  var _id = new mongo.ObjectID(id)
  return _conn.collection(collection).findOne({ '_id': _id })
}

function insert (collection, document) {
  return _conn.collection(collection)
    .insertOne(document)
}

function update (collection, document, id) {
  var _id = new mongo.ObjectID(id)
  return _conn.collection(collection)
    .findOneAndUpdate({ '_id': _id }, { $set: { document } }, { returnOriginal: false })
}

function remove (collection, id) {
  var _id = new mongo.ObjectID(id)
  return _conn.collection(collection).deleteOne({ '_id': _id })
}

module.exports = { findAll, findById, insert, update, remove }
