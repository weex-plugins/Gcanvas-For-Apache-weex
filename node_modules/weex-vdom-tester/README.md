# weex-vdom-tester

[![CircleCI](https://circleci.com/gh/weexteam/weex-vdom-tester.svg?style=svg)](https://circleci.com/gh/weexteam/weex-vdom-tester)

Virtual-DOM test driver for Weex.

## Usage

In Weex virtual-DOM test driver, you can create a `Runtime` which can simulate a native app JavaScript runtime. The `Runtime` instance can be initialized with a Weex JS framework like Vanilla, Vue, React etc.

Then in the runtime you can run a `Instance` with JS Bundle which is based on the target framework.

This can be used to test whether the framework work well. For example: make sure a certain JS Bundle could generate a certain "real" DOM tree in renderer as expect, or do a certain series of JS-bridge calls.

See `test/case.js` for some use case.

### Weex JS runtime APIs

```javascript
import {
  Runtime,
  DEFAULT_MODULES,
  DEFAULT_COMPONENTS,
  DEFAULT_ENV
} from 'weex-vdom-tester'

// Create a Weex JavaScript runtime for a certain Weex JS framework.
// You can also simulate the native environment which includes
// global env variables, native modules & components.
const runtime = new Runtime(jsFramework, {
  // modules: DEFAULT_MODULES,
  // components: DEFAULT_COMPONENTS
  // env: DEFAULT_ENV
})

// Listen `nativeLog` calls.
// The `type` is in `['debug', 'log', 'info', 'warn', 'error']`.
// If no `type` defined than it will listen all type of logs.
runtime.onlog((type, args) => { ... })
runtime.onlog(type, (args) => { ... })
runtime.offlog((args) => { ... })

// Register more modules and components.
// You can simulate all module APIs by this.
runtime.registerModules({
  x: {
    foo: (instance, document, ...args) => {},
    bar: (instance, document, ...args) => {}
  }
})
// Also if the vdom tester have implemented the module, you can just pass
// an Array of method names to register them.
runtime.registerModules({
  "modal": [
    "alert",
    "toast",
    "prompt",
    "confirm"
  ]
})
// Register native components.
runtime.registerComponents([
  x: { type: 'x', append: true }
])
```

### Weex instance APIs

```javascript
import { Instance } from 'weex-vdom-tester'

// Create a Weex instance in a certain runtime.
const instance = new Instance(runtime)
// Each instance has an id.
instance.id
// Each instance has a document object to record what it will render.
instance.doc

// Send commands to Weex JS runtime about this instance.
// See more details in Weex documentations.
instance.$create(code, config, data)
instance.$refresh(data)
instance.$destroy()
instance.$fireEvent(element, type, detail)
instance.$callback(callbackId, detail, isLast)
instance.$getRoot()

// Listen `callNative` from Weex JS runtime.
// The module API would always run even you don't listen it.
instance.oncall(moduleName, (methodName, args) => { ... })
instance.oncall(moduleName, methodName, (args) => { ... })
instance.oncall((moduleName, methodName, args) => { ... })

// Mock default behavior of module APIs
instance.mockModuleAPI(
  moduleName, methodName,
  (instance, document, originFunc, ...args) => { ... })

// Get JSON object from the real instance document.
instance.getRealRoot()

// Watch changes of a certain element or its children.
// The default element is the root.
instance.watchDOMChanges((target, changes) => { ... })
instance.watchDOMChanges(element, (target, changes) => { ... })

// The history of `callNative` and `callJS`
instance.history.callNative[{ timestamp, module, method, args }]
instance.history.callJS[{ timestamp, method, args }]
instance.history.refresh[{ timestamp, data }]

// Control the connection status to Weex JS runtime.
instance.play()
instance.pause()
```
