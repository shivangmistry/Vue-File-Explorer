const express = require('express');
const path = require('path');
const cors = require('cors');

const index = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(PORT, () => {
    console.log("Server listerning on port " + PORT);
});

module.exports = app;