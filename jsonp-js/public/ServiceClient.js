function invoke(url, method, args, callback)
{
    var script = document.createElement("script");
    var callbackName = "__jsonp_sum" + Math.round(Math.random() * 10000);
    window[callbackName] = (result) => {
        /* 缺少 */

        callback(result);
        window[callbackName] = null;
        delete window[callbackName];
        document.body.removeChild(script);
    }
    script.src = url + "?method=" + method + "&callback=" + callbackName + "&args=" + encodeURIComponent(JSON.stringify(args));
    document.body.appendChild(script);
}
