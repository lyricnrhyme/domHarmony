/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matCountChange = document.getElementById("matCount");
matCountChange.innerHTML = "11";
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var msgCountChange = document.getElementById("msgCount");
msgCountChange.innerHTML = "23";

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var fullNameChange = document.getElementById("fullname");
fullNameChange.innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var ageChange = document.getElementById("age");
ageChange.innerHTML = "63 Years Old";

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var newJob = document.createElement("div");
var jobChange = document.getElementById("data")
newJob.id = "job";
jobChange.appendChild(newJob);

newJob.innerHTML = "Clown and Restauranteur";

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var newHobby = document.createElement("div");
var hobbyChange = document.getElementById("data");
newHobby.id = "hobbies";
hobbyChange.appendChild(newHobby);

newHobby.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King."

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var newLocation = document.createElement("div");
var locationChange = document.getElementById("data");
newLocation.id = "location";
locationChange.appendChild(newLocation);

newLocation.innerHTML = "Honolulu, HI"

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var newWants = document.createElement("div");
var wantsChange = document.getElementById("data");
newWants.id = "wants";
wantsChange.appendChild(newWants);

newWants.innerHTML = "Mrs. McDonald"

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var profileParagraph = document.createElement("p");
profileParagraph.id = "pro2";
profileParagraph.innerHTML = "Pizza is good. Yay."
var profile2 = document.getElementById("profile")
profile2.appendChild(profileParagraph);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
//var matches = document.getElementById("matches");
//var otherMatches = matches.getElementsByTagName("otherBox");
var firstNameDivs = document.getElementsByClassName("firstName");
firstNameDivs[0].innerHTML = "Wendy";

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var otherAgeDivs = document.getElementsByClassName("otherAge");
otherAgeDivs[0].innerHTML = "48";

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusDivs = document.getElementsByClassName("status");
statusDivs[0].innerHTML = "Single Mother";

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
firstNameDivs[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
otherAgeDivs[1].innerHTML = "68";

 //Final Boss Create your own profile into the page:
 //change image to match your profile
var myImage = document.getElementsByClassName("other")[2];
myImage.setAttribute("src", "https://www.yourpetspace.info/wp-content/uploads/2015/03/Panda-In-Snow.jpg");
myImage.setAttribute("alt", "I'm Red Panda");

 //div with class name of firstName
 var myName = document.getElementsByClassName("firstName")[2];
myName.innerHTML = "Jamie";

 //div with class name of otherAge
var myAge = document.getElementsByClassName("otherAge")[2];
myAge.innerHTML = "24";

 //div with class name of status
var myStatus = document.getElementsByClassName("status")[2];
myStatus.innerHTML = "Red Panda";

 //div with class anem of Motto
var myMotto = document.getElementsByClassName("motto")[2];
myMotto.innerHTML = "Pizza";



