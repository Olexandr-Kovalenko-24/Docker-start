const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.send('Hello world 42!')
});

module.exports = app;