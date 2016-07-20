function invoke(url, args)
{
    const callbackName = "__json" + Math.round(Math.random()*10000);
    $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        data: args,
        success: function(json){
            console.log(JSON.parse(json));
        }
    });
}

function invokeGetJSON(url, args, callback)
{
    $.getJSON("http://127.0.0.1:8080/jsonp/sum?a=10&b=20&callback=?",
               function(data) {
                   callback(JSON.parse(data));
               });
}

function callback(data)
{
    alert(data);
}
