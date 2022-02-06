<p>
  <a title="Total downloads" href="https://www.npmjs.com/package/gridsome-plugin-plausible-analytics">
    <img src="https://img.shields.io/npm/dt/gridsome-plugin-plausible-analytics">
  </a>
  <a title="Current version" href="https://www.npmjs.com/package/gridsome-plugin-plausible-analytics">
    <img src="https://img.shields.io/npm/v/gridsome-plugin-plausible-analytics?color=%23cb3837">
  </a>
</p>

# gridsome-plugin-plausible-analytics

Adds plausible analytics to your gridsome site.

## Installation

* `npm install gridsome-plugin-plausible-analytics`
* `yarn add gridsome-plugin-plausible-analytics`

## Usage

In `gridsome.config.js`:

```js
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'blog.example.com',
        outboundLinkTracking: false
      }
    }
  ]
}   
```

## Options

#### dataDomain

- Type: `String`
- Default: None, field is required

Domain you entered on plausible.io e.g. blog.example.com.

#### excludePages (optional)

- Type: `Array[String]`
- Default: None

Do not track visits to the listed pages. Should be an array of strings, each representing a page to ignore. e.g. `["/blog4", "/rule/*", "/how-to-*", "/*/admin", "/*/priv/*", "/more-paths-here"]`
For more information, check [Excluding Pages on Plausible](https://plausible.io/docs/excluding-pages).

#### outboundLinkTracking (optional)

- Type: `boolean`
- Default: `false`

Use [Outbound Link Click Tracking](https://docs.plausible.io/outbound-link-click-tracking).
You also need to activate it in your Account. See Step 2 on https://docs.plausible.io/outbound-link-click-tracking#step-2-create-a-custom-event-goal-in-your-plausible-analytics-account.

#### customDomain (optional)

- Type: `String`
- Default: None

Custom domain you set up on plausible.io to serve the js-snippet e.g. `stats.[yourdomain].com` (see https://docs.plausible.io/custom-domain)

## Development notes

- Testing plugin, see https://gridsome.org/docs/how-to-create-a-plugin/#testing-your-plugin