var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(express.json());
app.use(bodyParser.json());

app.post("/posts", function (req, res) {
	let name = req.body.body;
	console.log("sended data: " + name);
  	res.send("Passed");
	res.end();
});

app.listen(3000, (err) => {
	if (err) {
		return console.log('server didn\'t start', err);
	}
	console.log('server is listening');
});
