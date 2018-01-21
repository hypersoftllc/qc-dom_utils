# qc-dom_utils

[![License][license-image]][license-url]

[![npm badge][npm-badge-png]][package-url]

A set of utilities for working with the DOM.

The structure of this package allows importing only the utilities used.  See
the Example Usage section below.


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
import DomUtils from 'qc-dom_utils'

let elem = DomUtils.get('myElem')
```

```js
import get from 'qc-dom_utils/get'

let elem = get('myElem')
```


[license-image]: http://img.shields.io/npm/l/qc-dom_utils.svg
[license-url]: LICENSE
[npm-badge-png]: https://nodei.co/npm/qc-dom_utils.png?downloads=true&stars=true
[package-url]: https://npmjs.org/package/qc-dom_utils
