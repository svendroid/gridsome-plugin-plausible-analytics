export default function (Vue, options, context) {
    if(!options.dataDomain){
        console.error("Please supply dataDomain in options for gridsome-plugin-plausible-analytics.")
        return;
    }

    context.head.script.push({
        "src": "https://plausible.io/js/plausible.js",
        "async": true,
        "defer": true,
        "data-domain": options.dataDomain
    })
}
