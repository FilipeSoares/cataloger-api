class SystemDAO {

    constructor(db) {
        this._db = db;
        this._collection = "systems";
    }

    findAll() {

        _db.findAll( "systems", function(err, data){

            if (err){
                console.log(err);
            }
            
            return data;
        });  

    }

    findByID(id) {
        return null;
    }

}

module.exports = SystemDAO;