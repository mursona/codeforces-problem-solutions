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
        let total;
      if (data.includes('Tetrahedron') === true && data.includes('Cube') === true && data.includes('Octahedron') === true && data.includes('Dodecahedron') === true &&  data.includes('Icosahedron') === true){
        total = 4+6+8+12+20;
      }
      else if (data.includes('Tetrahedron') === false && data.includes('Cube') === false && data.includes('Octahedron') === true && data.includes('Dodecahedron') === true &&  data.includes('Icosahedron') === true) {
        total = 0+6+8+12+20;
      }
      else if (data.includes('Tetrahedron') === true && data.includes('Cube') === false && data.includes('Octahedron') === true && data.includes('Dodecahedron') === true &&  data.includes('Icosahedron') === true) {
        total = 4+0+8+12+20;
      }
      else if (data.includes('Tetrahedron') === true && data.includes('Cube') === true && data.includes('Octahedron') === false && data.includes('Dodecahedron') === true &&  data.includes('Icosahedron') === true) {
        total = 4+6+0+12+20;
      }
      else if (data.includes('Tetrahedron') === true && data.includes('Cube') === true && data.includes('Octahedron') === true && data.includes('Dodecahedron') === false &&  data.includes('Icosahedron') === true) {
        total = 4+6+8+0+20;
      }
      else if (data.includes('Tetrahedron') === true && data.includes('Cube') === true && data.includes('Octahedron') === true && data.includes('Dodecahedron') === true &&  data.includes('Icosahedron') === false) {
        total = 4+6+8+12+0;
      }
      console.log(total);
      readline.close();
    }
  });
});