var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let str2 = '';
readline.on('line', (str)=> {
    for (let i=0; i<str.length; i++) {
        str2 = str.charAt(0).toUpperCase() + str.slice(1);
    }
    console.log(str2);
      readline.close();
});

