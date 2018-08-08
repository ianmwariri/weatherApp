var temperature = parseFloat(prompt("What is the Temperature?"));
var raining = prompt("Is it raining?");

if (temperature < 0) {
  alert("Brr! Don't freeze out there!");
} else if (temperature < 15 || raining === "yes") {
  alert("Don't forget a jacket!");
} else if (temperature < 25) {
  alert("Have a nice day :)");
} else {
  alert("Keep cool today!");
}