var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
let data = [];
readline.once("line", (_n) => {
  readline.on("line", (line) => {
    data.push(line);
    if (data.length == _n) {
        let tsum = 0;
        let csum = 0;
        let osum = 0;
        let dsum = 0;
        let isum = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].includes('Tetrahedron') === true) {
        tsum = tsum + 4;
      }
      if (data[i].includes('Cube') === true) {
        csum = csum + 6;
      }
      if (data[i].includes('Octahedron') === true) {
        osum = osum + 8;
      }
      if (data[i].includes('Dodecahedron') === true) {
        dsum = dsum + 12;
      }
      if (data[i].includes('Icosahedron') === true) {
        isum = isum + 20;
      }

    }
    console.log(tsum+csum+osum+dsum+isum);
    readline.close();
}
  });
});