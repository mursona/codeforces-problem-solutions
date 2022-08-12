var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
   
 
var lines = [];
readline.on('line', (line)=> {
    let arr = '';
    let i;
    lines.push(line);
    if (lines.length == 1) {
        lines.map((m) => {
          [lines] = m.split(" ");
          let str = lines.toLowerCase();
          for(i = 0; i < str.length; i++){
            if(str[i] == 'b' || str[i] == 'c' || str[i] == 'd' || str[i] == 'f' || str[i] == 'g' || str[i] == 'h' || str[i] == 'j' || str[i] == 'k' || str[i] == 'l' || str[i] == 'm' || str[i] == 'n' || str[i] == 'p' || str[i] == 'q' || str[i] == 'r' || str[i] == 's' || str[i] == 't' || str[i] == 'v' || str[i] == 'w' || str[i] == 'x' || str[i] == 'z'){
                arr = arr + '.' + str[i];
            }
        }
        console.log(arr);
        readline.close();
        });
   }
});