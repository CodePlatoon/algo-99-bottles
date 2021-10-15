function bottleSong(num_bottle) 
{
  // Write your code here!
  var word = "bottles";
  var count = num_bottle;
  while (count > 0) 
  {
    var bottle = count === 1 ? "bottle" : "bottles"; // ternary expressions
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1; // or --count
    var bottle = count === 1 ? "bottle" : "bottles";
    console.log(count + " " + word + " of beer on the wall.");
  }

};

bottleSong(5);
