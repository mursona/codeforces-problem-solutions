var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];
readline.on("line", (line) => {
  lines.push(line)
        if (lines.length === 1) {
            const x = parseInt(lines[0]);
            console.log( Math.ceil(x/5) );
            readline.close();

    }
  });