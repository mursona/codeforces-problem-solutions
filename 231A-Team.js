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
        [a, b, c] = m.split(" ");
        let x= parseInt(a);
        let y= parseInt(b);
        let z= parseInt(c);
        if ((x+y+z) >= 2) {
            sum = sum + 1;
        }

      });
      console.log(sum);
      readline.close();
    }
  });
});