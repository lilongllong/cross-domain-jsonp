const express = require("express");
const app = express();

app.use(express.static("./public"));

app.use("/jsonp/sum", (req, res, next) => {
    const args = req.query;
    const result = exports["sum"](args.a, args.b);

    res.send(req.query.callback + "(" + JSON.stringify(result) + ")");

});

app.use("/jsonpp/sum", (req, res, next) => {
    const args = req.query;
    const result = exports["sum"](args.a, args.b);
    res.jsonp(req.query.callback + "(" + JSON.stringify(result) + ")"); //it is right
    //res.jsonp({result: result}); //it is error fang 传回去的不对
});

app.listen(8080, () => {
    console.log("The server is running at http://localhost:8080");
});

exports.sum = function(a, b)
{
    return parseInt(a) + parseInt(b);
}
