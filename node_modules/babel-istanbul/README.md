## babel-istanbul - [babel](https://github.com/babel/babel) + [istanbul](https://github.com/gotwarlost/istanbul)

* [Features](#features)
* [Getting started](#getting-started)

### Features

* This package handles coverage for babel generated code by reconciling babel's output and its source map.
* babel-istanbul is drop-in replacement for [istanbul](https://github.com/gotwarlost/istanbul), as it is a fork of istanbul with babel compilation inserted into the instrumentation layer.

### Getting started

    $ npm install babel-istanbul

* babel-istanbul is run exactly like istanbul. For specifics on running istanbul, see [istanbul's README](https://github.com/gotwarlost/istanbul/blob/master/README.md).


### Special flags

* There are no longer special flags for babel. Use a .babelrc file for babel configuration.
