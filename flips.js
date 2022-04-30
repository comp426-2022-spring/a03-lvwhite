// Import the coinFlip function from your coin.mjs file
import { coinFlips } from './modules/coin.mjs';
import { countFlips } from './modules/coin.mjs';
import minimist from 'minimist';


var argv = minimist(process.argv.slice(2));
var number = argv['number']
console.log(number);

if (!number) {
    number = 1;
}
// Call the coinFlip function and put the return into STDOUT
let STDOUT = coinFlips(number);
let second = countFlips(STDOUT);
console.log(STDOUT);
console.log(second);