# Ecpl Pdf Viewer
[![Build Status](https://travis-ci.org/shameed/ecpl-pdf-viewer.svg?branch=master)](https://travis-ci.org/shameed/ecpl-pdf-viewer)
[![codecov](https://codecov.io/gh/shameed/ecpl-pdf-viewer/branch/master/graph/badge.svg)](https://codecov.io/gh/shameed/ecpl-pdf-viewer)
[![npm version](https://badge.fury.io/js/ecpl-pdf-viewer.svg)](http://badge.fury.io/js/ecpl-pdf-viewer)
[![devDependency Status](https://david-dm.org/shameed/ecpl-pdf-viewer/dev-status.svg)](https://david-dm.org/shameed/ecpl-pdf-viewer?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/shameed/ecpl-pdf-viewer.svg)](https://github.com/shameed/ecpl-pdf-viewer/issues)
[![GitHub stars](https://img.shields.io/github/stars/shameed/ecpl-pdf-viewer.svg)](https://github.com/shameed/ecpl-pdf-viewer/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shameed/ecpl-pdf-viewer/master/LICENSE)

## Demo
https://shameed.github.io/ecpl-pdf-viewer/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular4 library for pdf viewer in a popup

## Installation

Install through npm:
```
npm install --save ecpl-pdf-viewer
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { EcplPdfViewerModule } from 'ecpl-pdf-viewer';

@NgModule({
  imports: [
    EcplPdfViewerModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/shameed/ecpl-pdf-viewer/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ecpl-pdf-viewer/bundles/ecpl-pdf-viewer.umd.js"></script>
<script>
    // everything is exported ecplPdfViewer namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://shameed.github.io/ecpl-pdf-viewer/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
