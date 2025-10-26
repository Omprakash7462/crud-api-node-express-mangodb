const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
//const routes = require('./routes/web.js');
const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, () => {
    console.log('listing on port No. http://localhost:8000');
});
