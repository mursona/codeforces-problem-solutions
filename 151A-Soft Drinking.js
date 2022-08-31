var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
var data = [];
var sum = 0;
  readline.on("line", (line) => {
    data.push(line);
      data.map((m) => {
        [a1, b1, c1, d1, e1, f1, g1, h1] = m.split(" ");
        let n = parseInt(a1);
        let k = parseInt(b1);
        let l = parseInt(c1);
        let c = parseInt(d1);
        let d = parseInt(e1);
        let p = parseInt(f1);
        let nl = parseInt(g1);
        let np = parseInt(h1);
        let x = (k * l) / nl;
        let y = c * d;
        let z = p / np;
        let minimumXYZ = Math.min((Math.min (x,y)),z);
        let result = parseInt(minimumXYZ / n);
        console.log(result);
      });
      readline.close();
  });