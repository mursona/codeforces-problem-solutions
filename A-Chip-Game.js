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
        if ((x&1 && y&1) || (x%2 === 0 && y%2 === 0)) {
            console.log('Tonya');
        }
        else
            console.log('Burenka');
 
      });
      readline.close();
    }
  });
});