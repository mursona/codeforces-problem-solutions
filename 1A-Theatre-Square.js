var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
var data = [];
var numOfFlagstone = 1;
  readline.on("line", (line) => {
    data.push(line);
    if (data.length == 1) {
      data.map((m) => {
        [n, m, a] = m.split(" ");
        let row = Math.ceil(n/a);
        let col = Math.ceil(m/a);
        numOfFlagstone = row*col;
      });
      console.log(numOfFlagstone);
      readline.close();
    }
  });