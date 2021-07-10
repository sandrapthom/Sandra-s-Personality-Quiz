var cityScore = 0;
var countryScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", city);
q1a2.addEventListener("click", country);

q2a1.addEventListener("click", country);
q2a2.addEventListener("click", city);

q3a1.addEventListener("click", country);
q3a2.addEventListener("click", city);

result.addEventListener("click",updateResult);
restart.addEventListener("click", update);

function city(){
  cityScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "cityScore = " + cityScore)
  if (questionCount==3){
  console.log("The quiz is done!")
  updateResult();
}
}

function country(){
  countryScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "countryScore = " + countryScore)
  if (questionCount==3){
  console.log("The quiz is done!")
  updateResult();
}
}

function updateResult(){
if (cityScore>=2){
  result.innerHTML = "You are a city person!";
  console.log("You are a city person!");
}else if (countryScore>=2){
  result.innerHTML = "You are a country person!";
  console.log("You are a country person!");
}
}

function update(){
  result.innerHTML = "You are a...";
  console.log("You are a...");
  cityScore = 0;
  countryScore = 0;
  questionCount = 0;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

restart.addEventListener("click",enable);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function enable(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
}