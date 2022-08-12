var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var lines = [];
readline.on('line', (line)=> {
    lines.push(line);
    if (lines.length == 2) {
        let line1 = lines[0];
        line1 = line1.toLowerCase();
        let line2 = lines[1];
        line2 = line2.toLowerCase();
        if (line1 < line2) {
            console.log (-1)
        }
        else if (line1 > line2) {
            console.log(1)
        } else {
            console.log(0)
        }
        readline.close();
    }
});