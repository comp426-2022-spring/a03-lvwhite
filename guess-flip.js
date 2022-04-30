// Import the coinFlip function from your coin.mjs file
import { flipACoin } from './modules/coin.mjs';
import minimist from 'minimist';


var argv = minimist(process.argv.slice(2));
var call = argv['call'];

if ((call != 'heads' && call != 'tails') || !call) {
  console.log("Error: no input.")
  console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    let STDOUT = flipACoin(call);
    console.log(STDOUT);
}
