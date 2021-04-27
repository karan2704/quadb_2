const axios = require('axios')
const express = require('express')


const app = express()


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.get('/', function(req, res){

    var config = {
        method: 'get',
        url: 'https://api.wazirx.com/api/v2/tickers',
        
      };
    axios(config)
    .then(function (response) {
    
        res.send(JSON.stringify(response.data))
        
})
.catch(function (error) {
  console.log(error);
});
})






app.listen(8080, function() {
    console.log('Running on port 8080');
})
