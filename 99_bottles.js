const readline = require('readline');

function promptForInteger(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      const parsedInteger = parseInt(answer, 10);

      if (!isNaN(parsedInteger) && isFinite(parsedInteger)) {
        resolve(parsedInteger);
      } else {
        console.log("Invalid input. Please enter a valid integer.");
        resolve(promptForInteger(message)); // Re-prompt for input
      }
    });
  });
}

async function bottleSong(message, drink) {
  while (true) {
    const userbeerbottlenum = await promptForInteger(message);

    if (userbeerbottlenum >= 1 && userbeerbottlenum <= 99) {
      return userbeerbottlenum; // Return the valid integer
    } else {
      console.log("Invalid input. Please enter a number from 1 to 99.");
    }
  }
}

// bottle song
async function main() {
  const userbeerbottles = await bottleSong("Please enter how many beer bottles you have from 1 to 99: ");
  
  for (let i = userbeerbottles; i > 2; i--) {
    console.log(i, "bottles of beer on the wall,", i, "bottles of beer.");
    console.log("Take one down and pass it around,", i - 1, "bottles of beer on the wall.");
  }

  if (userbeerbottles === 1) {
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
  } 
  if (userbeerbottles === 2) {
    console.log("2 bottles of beer on the wall, 2 bottles of beer.");
    console.log("Take one down and pass it around, 1 bottle of beer on the wall.");
  }  else {
    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
  }
}

main();
