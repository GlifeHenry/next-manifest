# next-manifest

> Next.js plugin for [Web Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) and PWA

# Installation

```sh
npm install --save next-manifest
```
or

```sh
yarn add next-manifest
```

# Usage

```js
// next.config.js
const withManifest = require('next-manifest')

module.exports = withManifest(
  manifest: {
    // you can set all most of web manifest properties except icons,
    // which will be overwritten with new relative path.
    ...manifestProperties,
    // redefine icons properties of web manifest to pass argument for a source icon.
    // do not set src field if you want to keep your own icons paths.
    icons: {
      // source image path, to generate applications icons in various sizes for manifest.
      // this plugin try to only generate two types of sizes, 192x192, 512x512.
      src: './assets/pwa-icon.png'
      // default is true, no generating for new icons every build time until images hash changed.
      // if false is st, generate new icons every build time.
      cache: true
    }
  }
})
```

## manifest.json and icons

After build is over without errors, `manifest.json` will be created at `static/manifest/` and also, resized icons will be generated at `static/manifest/icons`. Have a look at sample `manifest.json` below with default values.

```json
{
  "name": "name at package.json",
  "short_name": "short name of name at package.json",
  "icons": [
    {
      "src": "/static/manifest/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/static/manifest/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#EFEFEF",
  "theme_color": "#EFEFEF"
}
```


## Deploying a manifest with more meta for PWA

Web manifest must be deployed in your HTML pages using a link tag in the head of your document. not only manifest link, also two of meta, viewport and theme-color might be needed for your PWA, like below the example:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="theme-color" content="#000000" />
<link rel="manifest" href="/static/manifest/manifest.json">
```

for your convenience, this plguin supports `Manifest` component. You can place `Manifest` component under `<Head>` component in `_document.js` with props.

```js
// pages/_document.js
<Head>
  <Manifest
    // default is /static/manifest/manifest.json.
    // most of cases, you don't need to update it. so you can skip it
    manifestHref='/static/manifest/manifest.json'
    // set a color to set `theme-color` meta tag into index.html
    themeColor='#F0F0F0'
    // set a color to set `viewport` meta tag into index.html
    initialScale='1'
  />
</Head>
```

See [the example project](./exmples/hello-pwa/pages/_document.js) to understand.

## License

MIT © [Jimmy Moon](https://ragingwind.me)
