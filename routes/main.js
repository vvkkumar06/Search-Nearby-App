const router = require('express').Router();
const request = require('request');
const config = require('../config');

// api call


router.get('/search/:query', (req,res)=>{
    const query = req.params.query;
    const url = `${config.baseUrl}query=${query}&key=${config.key}`;
    
    request(url, (err,response,body)=>{
        if(err){
            res.json({
                success:false,
                results: "Unable to find!"
            });
        }else{
            let newData = [];
            const data = JSON.parse(body).results;
            data.forEach(obj => {
                let address = obj.formatted_address;
                let name = obj.name;
                let rating = obj.rating;
                let icon = obj.icon;
                newData.push({name, address, rating, icon});
            });
            if(newData.length)
                res.json({success:true, results: newData});
            else if(!newData.length){
                res.json({
                    success:false,
                    results: "Unable to find!"
                });
            }
        }
    });
});



module.exports = router;