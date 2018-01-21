# qc-dom_utils

[![Build Status][travis-svg]][travis-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A set of utilities for working with the DOM.  Utilities found in other major
libraries such as jQuery will not be found here unless there is a good reason.

The structure of this package allows importing only the utilities used.  See
the Example Usage section below.  If you choose, you can import the entire
library or subsets of the library.  All of which depends on how you script the
import statements.


## Installation

```sh
npm install --save qc-dom_utils
```

or

```sh
yarn add qc-dom_utils
```


## Example Usage

```js
// Import entire library
import DomUtils from 'qc-dom_utils'

let elem = DomUtils.get('myElem')
let formElem = DomUtils.form.get('myForm')
```

```js
// Import just the `get` utility
import get from 'qc-dom_utils/get'

let elem = get('myElem')
```

```js
// Import just the form subset of utilities
import FormUtils from 'qc-dom_utils/form'

let formElem = FormUtils.get('myForm')
let firstInvalidElem = FormUtils.focusFirstInvalid('myForm', {
  ...
  lastname: '...',
  addressLn1: '...',
  addressLn2: false,
  city: false,
  state: '...',
  ...
})
```

```js
// Import just the `get` utility from the `form` namespace
import getForm from 'qc-dom_utils/form/get'

let formElem = getForm('myForm')
```

```js
// Import just the `focusFirstInvalidInputControl` utility from the `form` namespace
import focusFirstInvalid from 'qc-dom_utils/form/focusFirstInvalidInputControl'

let firstInvalidElem = focusFirstInvalid('myForm', { ... })
```

**Common JS**

```js
const DomUtils = require('qc-dom_utils/lib/cjs').default
...
```

```js
const get = require('qc-dom_utils/lib/cjs/get').default
...
```

```js
const FormUtils = require('qc-dom_utils/lib/cjs/form').default
...
```

```js
const get = require('qc-dom_utils/lib/cjs/form/get').default
...
```

```js
const focusFirstInvalid = require('qc-dom_utils/lib/cjs/form/focusFirstInvalidInputControl').default
...
```


[downloads-image]: http://img.shields.io/npm/dm/qc-dom_utils.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-dom_utils
[license-image]: http://img.shields.io/npm/l/qc-dom_utils.svg
[license-url]: LICENSE
[npm-badge-png]: https://nodei.co/npm/qc-dom_utils.png?downloads=true&stars=true
[package-url]: https://npmjs.org/package/qc-dom_utils
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-dom_utils.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-dom_utils
