import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import Post from './models/post';

let router = express.Router();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extendet: false}));

app.use(router);
mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
	Post.find({}).then((posts) => {
		res.json(posts);
	}).catch(() => console.log('Error: /'));
});

app.post('/like', (req, res) => {
	Post.update({'id': req.body.id}, {$inc: {'metaData.currentLike': 1}}).then((response) => {
		console.log(response)
		res.sendStatus(200);
	}).catch(() => console.log('Error: /like'));
});

app.listen(3001, () => console.log('listening on 3001 port'));
