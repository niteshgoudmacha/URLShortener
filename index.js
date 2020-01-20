const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys');
const cors = require("cors");


const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200
};
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
app.use(cors(corsOptions));
app.use(express.json({ extended: false }));
app.use(express.static(__dirname + '/dist/urlshortener'));
//Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
