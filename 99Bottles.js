var baseString = "";
function ninetyNinebottles(numBottles) {
for (var i = numBottles; i > 0; i--) {
    var next = i - 1;
    if (next < 0) {
        break;
    } if (next === 1) {
        baseString = i + " bottles of beer on the wall, " + i + " bottles of beer. \nTake one down and pass it around, " + next + "  bottle of beer on the wall.";
    }
    else if (i === 1) {
        baseString = followOne(i) + " of beer on the wall, " + followOne(i) + " of beer. \nTake one down and pass it around, no more bottles of beer on the wall. \n No more bottles of beer on the wall, no more bottles of beer." + " Go to the store and buy some more, 99 bottles of beer on the wall.";
    } else {
        baseString = i + " bottles of beer on the wall, " + i + " bottles of beer. \nTake one down and pass it around, " + next + "  bottles of beer on the wall.";
    }
    
    console.log(baseString);
}

}
// Write helper function to deal with last line of song
function followOne(num) {
    var fragment = "";
    if (num === 1) {
        fragment = num + " bottle";
    }
    return fragment;
}

//Ternary statement in '{}' with console.log() --> `bottle${i > 1 ? 's' : ''}'
//The preceding decodes to if i > 1 append 's' to the end of 'bottle' else append nothing
//Can also use while loop
//Can select a variable and then hold ctrl + d to select all instances and change at one time. Esc to complete