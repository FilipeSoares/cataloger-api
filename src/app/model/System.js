class System {
  constructor(name, version) {
    this._name = name;
    this._version = version;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get version() {
    return this._version;
  }

  set version(version) {
    this._version = version;
  }
}

module.exports = System;
