var express = require('express');
var app = express();
var fs = require('fs');


app.use(express.static('app'));

app.get('/getallproducts', function (req, res) {
	var obj;
	fs.readFile('products.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  res.json(obj);
	});
});

app.listen(3001);