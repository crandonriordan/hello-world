var myShopping = ["Eggs", "Milk", "Potatoes", "Cereal",
"Banana"];
var ord = prompt("Enter 1 for alphabetical order, " + 
	"and -1 for reverse order", 1);
if (ord == 1) {
  myShopping.sort();
  document.write(myShopping.join("<br />"));
} else if (ord == -1) {
  myShopping.sort();
  myShopping.reverse();
  document.write(myShopping.join("<br />"));
} else {
  document.write("That is not a valid input");
}