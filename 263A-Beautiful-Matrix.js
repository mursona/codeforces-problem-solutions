var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
var lines = [];
readline.on('line', (line)=> {
  lines.push(line);
  if (lines.length == 5) {
    if (lines[2] === '0 0 1 0 0') {
        console.log(0);
    }
    else if (lines[1] === '0 0 1 0 0' || lines[2] === '0 1 0 0 0' || lines[3] === '0 0 1 0 0' || lines[2] === '0 0 0 1 0') {
        console.log(1);
    }
    else if (lines[2] === '1 0 0 0 0' || lines[2] === '0 0 0 0 1' || lines[0] === '0 0 1 0 0' || lines[4] === '0 0 1 0 0' || lines[1] === '0 1 0 0 0' || lines[1] === '0 0 0 1 0' || lines[3] === '0 1 0 0 0' || lines[3] === '0 0 0 1 0') {
        console.log(2);
    }
    else if (lines[0] === '0 1 0 0 0' || lines[0] === '0 0 0 1 0' || lines[1] === '1 0 0 0 0' || lines[1] === '0 0 0 0 1' || lines[3] === '1 0 0 0 0' || lines[3] === '0 0 0 0 1' || lines[4] === '0 1 0 0 0' || lines[4] === '0 0 0 1 0') {
        console.log(3);
    }
    else{
        console.log(4);
    }
  readline.close();
  }
});
