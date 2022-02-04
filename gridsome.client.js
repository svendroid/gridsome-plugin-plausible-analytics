export default function (Vue, options, context) {
    if (!options.dataDomain) {
        console.error("Please supply dataDomain in options for gridsome-plugin-plausible-analytics.")
        return;
    }

    if (options.excludeRoutes && typeof options.excludeRoutes !== 'string' && !Array.isArray(options.excludeRoutes)) {
      console.error("If supplied, excludeRoutes has to be a String or Array of routes to exclude.");
      return;
    }

    var host = options.customDomain ? options.customDomain : "plausible.io";
    var postfix = '';
    var excludeRoutes;
    var filename;

    if (options.excludeRoutes && Array.isArray(options.excludeRoutes)) {
      excludeRoutes = options.excludeRoutes.join(', ');
    } else if (options.excludeRoutes) {
      excludeRoutes = options.excludeRoutes;
    }

    if (excludeRoutes) postfix += '.exclusions';
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

    if (excludeRoutes) {
      script["data-exclude"] = excludeRoutes;
    }

    context.head.script.push(script);
}
