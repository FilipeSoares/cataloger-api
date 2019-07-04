const Dao = require("./Dao");

class SystemDao extends Dao {
  constructor(db) {
    super(db, "systems");
  }
}

module.exports = SystemDao;
