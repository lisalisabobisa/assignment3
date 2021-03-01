 let coinFlip;
 let amount = window.prompt("How many flips?");

 for (let i = 0; i < amount; i++) {
     coinFlip = Math.round(Math.random());
     if (coinFlip === 0) {
        console.log("Heads");
     } else if (coinFlip === 1) {
        console.log("Tails");
     }
    
}


