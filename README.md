# vast-parser
[![JavaScript Style Guide][js-standard-image]][js-standard-url]
[![NPM version][npm-image]][npm-url]
[![NPM download][npm-download]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

Just another [IAB](https://www.iab.com/) [VAST 4.0](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-4-0/) format parser.

## Install
```
npm install vast-parser
```

## Usage

### Browser
```html
<script src="vast-parser.js"></script>
<script>
var xmlString = '<VAST version="4.0">...</VAST>'
var vastObject = VAST.parseFromXML(xmlString)
// ... Do your thing ...
</script>
```

### Node

```js
import XmlDom from 'xmldom'
import VAST from 'vast-parser'


const xmlString = '<VAST version="4.0">...</VAST>'
const vast = VAST.parseFromXML(xmlString, {DOMParser: XmlDom.DOMParser} )
// ... Do your thing ...
```

## Inspired By
- [@MailOnline/videojs-vast-vpaid](https://github.com/MailOnline/videojs-vast-vpaid)

## TODO
- [ ] Need more VAST 4.0 test cases

## License
[MIT](https://kyungw00k.mit-license.org/)


[js-standard-url]: http://standardjs.com/
[js-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[npm-url]: https://npmjs.org/package/vast-parser
[npm-image]: https://img.shields.io/npm/v/vast-parser.svg?style=flat-square
[npm-download]: https://img.shields.io/npm/dm/vast-parser.svg?style=flat-square

[depstat-url]: https://david-dm.org/kyungw00k/vast-parser
[depstat-image]: https://david-dm.org/kyungw00k/vast-parser.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/kyungw00k/vast-parser#info=devDependencies
[depstat-dev-image]: https://david-dm.org/kyungw00k/vast-parser/dev-status.svg?style=flat-square
