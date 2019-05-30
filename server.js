const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");

var app = express();
app.use(express.json());
app.use(bodyParser.json());

var id_data = 0;

const sequelize = new Sequelize("mydatal","philius","1234", {
	dialect: "mysql",
	host: "localhost",
	port: 3306,
	logging : false,
  define: {
    timestamps: false
  }


});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

const dataset = sequelize.define("dataset", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},

	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

dataset.create({id:id_data, name:"dick"}).then(res=>{console.log(res);
}).catch(err=>console.log(err));

 // dataset.findAll({raw:true}).then(dataset=>{
 // 	console.log(dataset);
 // }).catch(err=>console.log(err));

 app.post("/postData", function (req, res) {
	 // var id_data = 0;
	 let name = req.body.name;
	dataset.create({id:id_data, name:name}).then(res=>{console.log(res);
	}).catch(err=>console.log(err));
	id +=1;

	console.log("method post (postData) passed");
  	res.send("{name:Passed}");
  	res.end();
});

app.get("/getTask", function (req, res) {
	console.log("method get (getTask) passed");
	var task = {task:"Сделайте снимок /object name/"};
	res.send(task);
	res.end;
});

app.listen(3000, (err) => {
	if (err) {
		return console.log("server didn't start", err);
	}
	console.log("server is listening");
});
