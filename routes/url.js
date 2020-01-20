const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const shortid = require('shortid');
const keys = require('../config/keys');

const Url = require('../models/Url');

// @route POST /api/url/shorten

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    // console.log(longUrl);
    const baseUrl = keys.baseUrl;
    if(!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid BaseUri');
    }

    // create url code
    const urlCode = shortid.generate();

    // check long Url
    if(validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if(url) {
                res.json(url.shortUrl);
            }
            else {
                const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,        
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(shortUrl);
            }
        } catch(err) {
            console.log(err);
            res.status(500).json('Internal Server Error');
        }
    }
    else {
        res.status(401).json('Invalid longUrl');
    }

});

module.exports = router;