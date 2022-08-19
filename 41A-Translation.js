var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
var lines = [];
readline.on('line', (line)=> {
  lines.push(line);
  if (lines.length == 2) {
    let lineTwo = lines[1].split('');
    let reverseLine2 = lineTwo.reverse();
    let joinLine2 = reverseLine2.join('');
    if (lines[0] === joinLine2) {
      console.log('YES');
    }
    else
      console.log('NO');
      readline.close();
  }
});
