const express = require("express");
const router = express.Router()

router.get('/listings', (req, res) => {
    const listingsData = 
    [
        {
            "id": 1,
            "address": "1529 Kentucky St.",
            "zip-code": "64054",
            "unitNum": "108",
            "bedrooms": "1",
            "bathrooms": "1",
            "sqFt": "1000",
            "pictureLinks": "example.url"
            
        }
    ]

    res.send(listingsData)
})

module.exports = router;