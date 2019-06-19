class System {
  constructor (name, version) {
    this._name = name
    this._version = version
  }

  get name () {
    return this._name
  }

  get version () {
    return this._version
  }
}

module.exports = System
