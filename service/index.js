require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const { LOCAL_URL, PORT } = process.env;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// FILL YOUR ROUTE
app.use('/api', router);
// app.get('/api', (req, res)=> {
//   res.status(200).send("Hello")
// })

app.listen(PORT);
// eslint-disable-next-line
console.log(`Server listening at ${LOCAL_URL}:${PORT}`);
