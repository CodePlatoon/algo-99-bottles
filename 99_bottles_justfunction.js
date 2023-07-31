function main() {
    for (let i = userbeerbottles; i > 2 && i<=99; i--) {
      console.log(i, "bottles of beer on the wall,", i, "bottles of beer.");
      console.log("Take one down and pass it around,", i - 1, "bottles of beer on the wall.");
    }
  
    if (userbeerbottles === 2) {
      console.log("2 bottles of beer on the wall, 2 bottles of beer.");
      console.log("Take one down and pass it around, 1 bottle of beer on the wall.");
    } else if (userbeerbottles === 1) {
      console.log("1 bottle of beer on the wall, 1 bottle of beer.");
      console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    }

    if(userbeerbottles>0&& userbeerbottles<=99){
        console.log("1 bottle of beer on the wall, 1 bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    }else {
        console.log("Error Pick a number from 1 to 99");
    }
  }
  

  let userbeerbottles = 98;
  main();
  