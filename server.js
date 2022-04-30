// imports
import { coinFlip } from './modules/coin.mjs';
import { coinFlips } from './modules/coin.mjs';
import { countFlips } from './modules/coin.mjs';
import { flipACoin } from './modules/coin.mjs';
import minimist from 'minimist';
import express from 'express';

// Require Express.js
const app = express()


var argv = minimist(process.argv.slice(2));
var port = argv['port'] || 5000;
//args["port"]
//const port = process.env.PORT || 5000
// Start an app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
});

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
    });

app.get('/app/flip', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    // Call the coinFlip function and put the return into STDOUT
    let STDOUT = coinFlip();
    res.end(STDOUT);
});

app.get('/app/flips/:number', (req, res) => {
  //res.setHeader('Content-Type', 'text/html')
  
  ///// from a02
  const numOfFlips = coinFlips(req.params.number);

  // Call the coinFlip function and put the return into STDOUT
  let str1 = JSON.stringify(numOfFlips)
  let second = countFlips(numOfFlips);
  let str = JSON.stringify(second)
  //console.log(str1);
  //nothing
  res.end("{\"raw\":" + str1 + ", \"summary\":" + str + "}");
});

app.get('/app/call/heads', (req, res) => {
  res.setHeader('Content-Type', 'text/html')

  // a02
  let STDOUT = flipACoin("heads");
  res.json(STDOUT);
});

app.get('/app/call/tails', (req, res) => {
  res.setHeader('Content-Type', 'text/html')

  // a02
  let STDOUT = flipACoin("tails");
  res.json(STDOUT);
});

// Default response for any other request
app.use(function(req, res){
  res.status(404).send('404 NOT FOUND')
});