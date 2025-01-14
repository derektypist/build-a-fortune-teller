// Initialize Variables
let fortune1 = "Watch the weather.";
let fortune2 = "You will be going to the library today.";
let fortune3 = "You have a home visit with a professional lady next week.";
let fortune4 = "It would be wise to avoid alcohol today.";
let fortune5 = "Be cautious when you are driving.";

let randomNumber = Math.floor(Math.random() * (5)) + 1;

// Apply if statement
let selectedFortune = (randomNumber == 1) ? fortune1 : (randomNumber == 2) ? fortune2 : (randomNumber == 3) ? fortune3 : (randomNumber == 4) ? fortune4 : fortune5;

// Log selected fortune to the console
console.log(selectedFortune);
