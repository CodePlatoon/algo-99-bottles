function bottleSong(num) {
  
  for
  (num;num>=2; num--) {console.log( num+" bottles of beer on the wall "+num+" bottles of beer. Take one down and pass it around "+(num-1)+" bottles of beer on the wall")}

  if (num===1) {console.log ("1 bottle of beer on the wall. 1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.")}
  else if (num<=0){console.log("empty: go to the store, get more beer")}
};

bottleSong(10);
