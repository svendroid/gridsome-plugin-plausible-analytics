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
        dataDomain: 'blog.example.com' //required
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