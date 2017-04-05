function clonePlainObject (obj) {
  return JSON.parse(JSON.stringify(obj))
}

exports.clonePlainObject = clonePlainObject
