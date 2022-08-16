var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
var data = [];
var sum = 0;
readline.once("line", (_n) => {
  readline.on("line", (line) => {
    data.push(line);
    if (data.length == _n) {
      data.map((m) => {
        [a, b] = m.split(" ");
        let x= parseInt(a);
        let y= parseInt(b);
        if (y === 0) {
            console.log('No');
        }
        else if (y%2 === 1) {
            for(let i = 3 ; i<=x ; i++){
                    console.log('Yes');
                    console.log(x[i]);

        }
        }
      });
      readline.close();
    }
  });
});