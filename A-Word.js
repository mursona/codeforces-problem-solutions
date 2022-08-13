var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var lines = [];
readline.on('line', (str)=> {
    lines.push(str);
    if (lines.length == 1) {
        let upperCaseLength = str.replace(/[a-z]/g, '').length;
        if (upperCaseLength > (str.length/2)) {
            console.log(str.toUpperCase());
        }
        else
        console.log(str.toLowerCase());
        readline.close();
    }
});

