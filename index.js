const db = require('./config/db');
const Pici = require('./models/pici')(db, db.Schema);


const path = require('path');
const express = require('express');

const app = express();
const port = 8000;


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (request, response) => {

	// var pici = new Pici({ title: 'Arpan', message: 'Something Something' });
	response.sendFile(__dirname + "/views/index.html");
	
});



app.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});


app.post('/new-message', (request, response) => {
	var pici = new Pici(request.body);


	pici.save().then(item => {
		response.send(item)
	}).catch(error => {
		response.status(400).send("unable to save to database");
	});
});