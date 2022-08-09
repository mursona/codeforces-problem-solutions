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
