var express = require("express"),
    app = express();

app.get('/', function (req, res) {
    res.render('portfolio.ejs');
});

app.use(express.static('views'))

var port = process.env.PORT || 3030; 

app.listen(port, process.env.IP, function () {
    var appConsoleMsg = 'Hemsidan startad: ';
    appConsoleMsg += process.env.IP + ':' + port;
    console.log(appConsoleMsg);
});
