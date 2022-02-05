export default function (Vue, options, context) {
    if (!options.dataDomain) {
        console.error("Please supply dataDomain in options for gridsome-plugin-plausible-analytics.")
        return;
    }

    if (options.excludePages && !Array.isArray(options.excludePages)) {
      console.error("If supplied, excludePages has to be an array of pages to exclude.");
      return;
    }

    var host = options.customDomain ? options.customDomain : "plausible.io";
    var postfix = '';
    var excludePages;
    var filename;

    if (options.excludePages && options.excludePages.length > 0) {
      excludePages = options.excludePages.join(', ');
    }

    if (excludePages) postfix += '.exclusions';
    if (options.outboundLinkTracking) postfix += '.outbound-links';
    postfix += '.js';

    if (options.customDomain) {
        filename = 'index' + postfix;
    } else {
        filename = 'plausible' + postfix;
    }

    var script = {
        "src": "https://" + host + "/js/" + filename,
        "async": true,
        "defer": true,
        "data-domain": options.dataDomain
    };

    if (excludePages) {
      script["data-exclude"] = excludePages;
    }

    context.head.script.push(script);
}
