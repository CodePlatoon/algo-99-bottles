function bottleSong() {
  console.log("99 bottles of beer on the wall, 99 bottles of beer.")
  for (let i = 98; i > 1; i--) {
    console.log("Take one down, pass it around, "+i+" bottles of beer on the wall.\n"+i+" bottles of beer on the wall, "+i+" bottles of beer.")
    }
  console.log("Take one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
};

bottleSong();
