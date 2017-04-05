var env = require('./lib/env/default')
exports.DEFAULT_MODULES = env.DEFAULT_MODULES
exports.DEFAULT_COMPONENTS = env.DEFAULT_COMPONENTS
exports.DEFAULT_ENV = env.DEFAULT_ENV
exports.DEFAULT_CSS_UNIT = env.DEFAULT_CSS_UNIT
exports.Runtime = require('./lib/runtime').Runtime
exports.Instance = require('./lib/instance').Instance
