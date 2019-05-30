class SystemDAO {
  constructor (db) {
    this._db = db
    this._collection = 'systems'
  }

  list () {
    return new Promise((resolve, reject) => {
      this._db.findAll('systems', function (err, data) {
        if (err) {
          return reject(err)
        }
        return resolve(data)
      })
    })
  }

  fetch (id) {
    return this._db.findById('systems', id)
  }

  create (system) {
    return this._db.insert('systems', system)
  }

  update (system, id) {
    return new Promise((resolve, reject) => {
      this._db.update('systems', system, id)
        .then(result => {
          return resolve(result.value.document)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  remove (id) {
    return this._db.remove('systems', id)
  }
}

module.exports = SystemDAO
