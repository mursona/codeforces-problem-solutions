var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.on('line' , (wordLong) => {
    if(!Number.isInteger(parseInt(wordLong))){
        if(wordLong.length > 10){
            console.log(wordLong[0] + wordLong.substring(1 , wordLong.length - 1).length + wordLong[wordLong.length-1])
        }
        else{
            console.log(wordLong)
        }
    }
})