require('dotenv').config({ path: './config.env' });
const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5050;


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}\n`);
});