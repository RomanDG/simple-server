const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

const records = require('./data').records;

app.get('/', (req, res)=>{
	res.json(records);
})

app.listen(3001,()=>{
	console.log('localhost | 3001');
})