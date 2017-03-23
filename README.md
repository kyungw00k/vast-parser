# VAST.js
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Just another [IAB](https://www.iab.com/) [VAST 4.0](https://www.iab.com/guidelines/digital-video-ad-serving-template-vast-4-0/) format parser.

## Install
```
npm install @kyungw00k/VAST.js
```

## Usage

### Browser
```js
import VAST from 'vast.js'

const xmlString = '<VAST version="4.0">...</VAST>'
const vast = VAST.parseFromXML(xmlString)
// ... Do your thing ...
```

### Node

```js
import XmlDom from 'xmldom'
import VAST from 'vast.js'


const xmlString = '<VAST version="4.0">...</VAST>'
const vast = VAST.parseFromXML(xmlString, {DOMParser: XmlDom.DOMParser} )
// ... Do your thing ...
```

## Inspired By
- [@MailOnline/videojs-vast-vpaid](https://github.com/MailOnline/videojs-vast-vpaid)

## TODO
- [ ] Need more test cases

## License
MIT
