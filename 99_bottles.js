function bottleSong() {

  for (let i = 99; 0 <= i; i--) {
    console.log(i)
    switch (i){
      case 2:
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. \nTake one down and pass it around, ${i-1} bottle of beer on the wall.`);
        break;
      case 1:
        console.log(`${i} bottle of beer on the wall, ${i} bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.`);
        break;
      case 0:
        console.log(`No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.`);
        break;
      default:
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. \nTake one down and pass it around, ${i-1} bottles of beer on the wall.`)
    }
  }
}

bottleSong();
