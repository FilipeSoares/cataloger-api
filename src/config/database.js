const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://cataloger:cataloger@clusterfree-anpsj.mongodb.net/cataloger-db?retryWrites=true';
// const url = 'mongodb://localhost:27017';
const dbName = 'cataloger-db';

var _conn;

MongoClient.connect(url, { useNewUrlParser: true })
    .then(client => _conn = client.db(dbName))
    .catch(err => console.log(err));

function insert(collection, document) {

    return _conn.collection(collection)
        .insertOne(document);
}

function removeAll() {
    _conn.collection("systems").deleteMany({})
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err);
        });
}

function findAll(collection, callback) {
    _conn.collection(collection).find({}).toArray(callback);
}

module.exports = { findAll, insert, removeAll };