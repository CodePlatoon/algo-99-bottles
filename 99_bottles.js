function bottleSong() {
  // Write your code here!
  let cnt = 99
  while (cnt >= 0) {
    if (cnt >1) {
    console.log(cnt + " bottles of beer on the wall, " + cnt + " bottles of beer");
    cnt--;
    console.log("Take one down, pass it around, " +cnt+ " bottles of beer on the wall.");
    }
    else if (cnt === 1) {
    console.log(cnt + " bottle of beer on the wall, " +cnt+ " bottle of beer.");
    cnt--;
    console.log("Take one down pass it around, no more bottles of beer on the wall.");
    }
    else {
      console.log("No more bottles of beer on the wall, no more bottles of beer.");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
      cnt--;
    }
  }
};

bottleSong();
