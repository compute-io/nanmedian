nanmedian
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the median of an array ignoring non-numeric values. 


## Installation

``` bash
$ npm install compute-nanmedian
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var foo = require( 'compute-nanmedian' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-nanmedian' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-nanmedian.svg
[npm-url]: https://npmjs.org/package/compute-nanmedian

[travis-image]: http://img.shields.io/travis/compute-io/nanmedian/master.svg
[travis-url]: https://travis-ci.org/compute-io/nanmedian

[coveralls-image]: https://img.shields.io/coveralls/compute-io/nanmedian/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/nanmedian?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/nanmedian.svg
[dependencies-url]: https://david-dm.org/compute-io/nanmedian

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/nanmedian.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/nanmedian

[github-issues-image]: http://img.shields.io/github/issues/compute-io/nanmedian.svg
[github-issues-url]: https://github.com/compute-io/nanmedian/issues
