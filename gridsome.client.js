export default function (Vue, options, context) {
    if (!options.dataDomain) {
        console.error("Please supply dataDomain in options for gridsome-plugin-plausible-analytics.")
        return;
    }

    var host = options.customDomain ? options.customDomain : "plausible.io";
    var postfix = (options.outboundLinkTracking ? '.outbound-links' : '') + `.js`;
    var filename;
    if (options.customDomain) {
        filename = 'index' + postfix;
    } else {
        filename = 'plausible' + postfix;
    }

    context.head.script.push({
        "src": "https://" + host + "/js/" + filename,
        "async": true,
        "defer": true,
        "data-domain": options.dataDomain
    })
}
