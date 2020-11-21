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

#### outboundLinkTracking (optional)

- Type: `boolean`
- Default: `false`

Use [Outbound Link Click Tracking](https://docs.plausible.io/outbound-link-click-tracking).
You also need to activate it in your Account. See Step 2 on https://docs.plausible.io/outbound-link-click-tracking#step-2-create-a-custom-event-goal-in-your-plausible-analytics-account.

#### customDomain (optional)

- Type: 'String'
- Default: None

Custom domain you set up on plausible.io to serve the js-snippet e.g. `stats.[yourdomain].com` (see https://docs.plausible.io/custom-domain)