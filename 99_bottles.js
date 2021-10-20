var baseString = "";
function ninetyNinebottles() {
for (var i = 99; i > 0; i--) {
    var next = i - 1;
    if (next < 0) {
        break;
    } if (next === 1) {
        baseString = i + " bottles of beer on the wall, " + i + " bottles of beer. \nTake it down and pass it around, " + next + "  bottle of beer on the wall.";
    }
    else if (i === 1) {
        baseString = followOne(i) + " of beer on the wall, " + followOne(i) + " of beer. \nTake it down and pass it around, " + next + "  bottles of beer on the wall.";
    } else {
        baseString = i + " bottles of beer on the wall, " + i + " bottles of beer. \nTake it down and pass it around, " + next + "  bottles of beer on the wall.";
    }
    
    console.log(baseString);
}

}

function followOne(num) {
    var fragment = "";
    if (num === 1) {
        fragment = num + " bottle";
    }
    return fragment;
}
