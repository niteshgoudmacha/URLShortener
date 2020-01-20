const express = require('express');
const path = require('path');
const router = express.Router();

const Url = require('../models/Url');


router.get('/:code', async  (req, res) => {
    try {
        const url = await  Url.findOne({ urlCode: req.params.code });

        if(url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('Url not found')
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
});

router.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname + '/dist/urlshortener/index.html'));
});

module.exports = router;