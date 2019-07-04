class Dao {
  constructor(db, collection) {
    this._db = db;
    this._collection = collection;
  }

  list() {
    return new Promise((resolve, reject) => {
      this._db.findAll(this._collection, function(err, data) {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }

  fetch(id) {
    return this._db.findById(this._collection, id);
  }

  create(system) {
    return this._db.insert(this._collection, system);
  }

  update(system, id) {
    return new Promise((resolve, reject) => {
      this._db
        .update(this._collection, system, id)
        .then(result => {
          return resolve(result.value.document);
        })
        .catch(err => {
          return reject(err);
        });
    });
  }

  remove(id) {
    return this._db.remove(this._collection, id);
  }
}

module.exports = Dao;
