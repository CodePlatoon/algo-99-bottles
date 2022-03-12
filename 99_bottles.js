function bottleSong() {
  var bottles = 99;
  while (bottles > 0) {
    if (bottles > 1){
      console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.")
      bottles -= 1;
      console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.")
    } else {
      console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer.")
      bottles -= 1;
      console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall.")
    } 
  }
};

bottleSong();
