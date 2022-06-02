const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, () =>
    console.log(`App listening on ${PORT}`)
);