const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001
const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("./Develop/public/assets", express.static("./Develop/public/assets"));

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

app.listen(PORT, () =>
    console.log(`App listening on ${PORT}`)
);