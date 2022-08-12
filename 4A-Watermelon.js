//concept is even number
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question( '', function(answer) {
    let n = parseInt(answer);
    if (n % 2 === 0 && n !== 2) {
        console.log("Yes");
      } else {
        console.log("No");
      }
 
  rl.close();
});
