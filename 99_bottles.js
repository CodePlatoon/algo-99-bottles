function bottleSong() {
  for (i = 99;i > 2; i-- )
  console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.
  `)
  if (i === 2){
    console.log(("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."))
  } 
};

bottleSong();