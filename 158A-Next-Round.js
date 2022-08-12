//input 
//   8 5 ----- n & k
//   10 8 9 7 7 7 5 5 --- c array type
//   10      8       9        7        7       7       5      5
// index-0 index-1 index-2  index-3 index-4 index-5 index-6 index-7
// calculation is:
// if c[k-1] =< c[indexvalue] --- index-4 = 7 <= c[indexvalu] then count+1
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("", nk => {
  readline.question("", c => {
      nk = nk.split(" ");
      k = parseInt(nk[1]);
      c = c.split(" ");

      let sum = 0;
      for (let i = 0; i < c.length; i++) {
        let cInt = parseInt(c[i]);
        if ((cInt >= c[k - 1]) && cInt > 0)
            sum++
    }
    
    console.log(sum);
    readline.close();
  });
});
