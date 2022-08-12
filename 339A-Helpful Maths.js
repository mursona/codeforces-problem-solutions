var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var lines = [];
let result;
readline.on('line', (str)=> {
    lines.push(str);
    if (lines.length == 1) {
        if (str.length == 1 || str.length == 3) {
            result = str;
        }
        lines = str.replace(/[^0-9]/g, "");
        let res = lines.split('');
        let add = [];
        for (let i = 0; i < res.length; i++) {
            for (let j = i + 1; j < res.length; j++) {
            if (res[i] > res[j]) {
                temp = res[i];
                res[i] = res[j];
                res[j] = temp;
                add = res.join('+');
                result = add;
            }
            }
        }
        console.log(result);
        readline.close();
    }
});

