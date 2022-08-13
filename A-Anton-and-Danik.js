var readline = require('readline');
var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    
var charA = 'A';
var charD = 'D';
readline.once("line", (_n) => {
  readline.on("line", (lines) => {
    if (lines.length == _n) {
        let countA = 0;
        let countD = 0;
        for (let i = 0; i < lines.length; i++) {
            if (lines.charAt(i) == charA) {
                countA += 1;
            }
        }
        for (let j = 0; j < lines.length; j++) {
            if (lines.charAt(j) == charD) {
                countD += 1;
            }
        }
            if (countA  > countD) {
                console.log('Anton');
            }
            else if (countA < countD) {
                console.log('Danik');
            }
            else
                console.log('Friendship');
                readline.close();
    }
  });
});
