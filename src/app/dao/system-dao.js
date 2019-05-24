class SystemDAO {

    constructor(db) {
        this._db = db;
        this._collection = "systems";
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this._db.findAll("systems", function (err, data) {
                if (err) {
                    return reject(err);
                }
                return resolve(data);
            });
        });

    }

    findByID(id) {
        return this._db.findById("systems", id);
    }

    insert(system) {
        return this._db.insert("systems", system);

    }
}

module.exports = SystemDAO;