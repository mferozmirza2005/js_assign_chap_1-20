// Chapter no. 1

// 1. Write a script to greet your website visitor using JS alert box.

alert("Hello...");

// 2. Write a script to display following message on your web page:

alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page: (Hint : Use line break)

alert("Welcome to JS Land... \nHappy Coding!");

// 4. Write a script to display following messages in sequence:

alert("Welcome to JS Land...");
alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// 5. Generate the following message through browser’s developer console:

var consAlert = alert("Hello... I can run JS through my web browser's console");
console.log(consAlert);

// 6. Make use of alerts in your new/existing HTML & CSS project.

var login = document.getElementById("sbBtn");

login.addEventListener("click", () => {
  var user = "feroz";
  var password = "2005";

  var usName = document.getElementById("name").value;
  var usPass = document.getElementById("pass").value;

  if (usName == user && usPass == password) {
    alert("congratulation! your account has been login successfully.");
  } else {
    alert("Please enter the correct username or password.");
  }
});

// Chapter no. 2

// 1. Declare a variable called username

var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Muhammad Feroz Mirza";

// 3. Write script to
//    a) Declare a JS variable, titled message.
//    b) Assign “Hello World” to variable message
//    c) Display the message in alert box.

// (a):

var message;

// (b):

message = "Hello World";

// (c):

alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var stdName = "Jhone Doe";
var stdAge = "15 years old";
var stdEdu = "Certified Mobile Application Development";

alert(stdName);
alert(stdAge);
alert(stdEdu);

// Write a script to display the following alert using one JS variable:

var fastFood = "PIZZA";
var ffslice = [];

for (var i = 5; i >= 1; i--) {
  ffslice.push(fastFood.slice(0, i));
}
alert(
  ffslice[0] +
    "\n" +
    ffslice[1] +
    "\n" +
    ffslice[2] +
    "\n" +
    ffslice[3] +
    "\n" +
    ffslice[4]
);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

var email = "m.ferozmirza2005@gmail.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn form the book " + book);

// 8. Write a script to display this in browser through JS

document.write(
  "Yah! I can write HTML content through Javascript" + "<br/>" + "<br/>"
);

// 9. Store following string in a variable and show in alert and browser through JS

var uniqueSTR = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(uniqueSTR);

// Chapter no. 3

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 16;
alert("I am " + age + " years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number // of visits on your web page. For example: “You have visited this site N times”.

var N = "2";
alert("You have visited this site " + N + " times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 2005;
document.write("My birth year is " + birthYear + "<br/>" + "<br/>");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "jhon Doe";
var visitorProduct = " T-shirt";
var OrderProduct = 5;

document.write(
  visitorName +
    " ordered " +
    OrderProduct +
    visitorProduct +
    "(s) on XYZ Clothing store" +
    "<br/>" +
    "<br/>"
);

// Chapter no. 4

// Declare 3 variables in one statement.

var variable1, variable2, variable3;

// 2. Declare 5 legal & 5 illegal variable names.

// legal variables

// 1. var abc;
// 2. var aBc;
// 3. var abc123;
// 4. var $abc;
// 5. var abc_123;

// illegal variables

// 1. var 123abc;
// 2. var a-b-c;
// 3. var abc&;
// 4. var abc^;
// 5. var abc 123;

// 3. Display this in your browser:
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// (a):

document.write("Rules for naming js Variables" + "<br/>" + "<br/>");

// (b):

var blank1 = "letters";
var blank2 = "numbers";
var blank3 = "Dollar signs";
var blank4 = "underscores.";

document.write(
  "Variable name can contain only " +
    blank1 +
    ", " +
    blank2 +
    ", " +
    blank3 +
    ", and " +
    blank4 +
    "<br/>" +
    "<br/>"
);

// (c):

var blank5 = "Dollar sign";
var blank6 = "underscore";
var blank7 = "Capital letter";

document.write(
  "Variables must begin with a " +
    blank5 +
    ", " +
    blank6 +
    " or " +
    blank7 +
    "." +
    "<br/>" +
    "<br/>"
);

// (d):

var blank8 = "sensitive";

document.write("Variable names are case " + blank8 + "<br/>" + "<br/>");

// (e):
var blank9 = "Keywords";

document.write("Variable names should not be JS " + blank9 + "<br/>" + "<br/>");

// Chapter no. 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = +prompt("Number 1", "");
var num2 = +prompt("Number 2", "");

var sum = num1 + num2;

document.write(
  "Sum of " + num1 + " and " + num2 + " is " + sum + "<br/>" + "<br/>"
);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// subtraction

var sub = num1 - num2;
var divsub = document.getElementById("sub");

document.write(
  "Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br/>" + "<br/>"
);

// multiplication

var mul = num1 * num2;

document.write(
  "multiplication of " +
    num1 +
    " and " +
    num2 +
    " is " +
    mul +
    "<br/>" +
    "<br/>"
);

// division

var div = num1 / num2;

document.write(
  "division of " + num1 + " and " + num2 + " is " + div + "<br/>" + "<br/>"
);

// modulus

var mod = num1 % num2;

document.write(
  "modulus of " + num1 + " and " + num2 + " is " + mod + "<br/>" + "<br/>"
);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// (a)

var myMathExp;

// (b)

document.write(
  "Value after variable declaration is: " + myMathExp + "<br/>" + "<br/>"
);

// (c)

myMathExp = 5;

// (d)

document.write("Initial value: " + myMathExp + "<br/>" + "<br/>");

// (e)

myMathExp++;

// (f)

document.write("Value after increment is: " + myMathExp + "<br/>" + "<br/>");

// (g)

myMathExp = myMathExp + 7;

// (h)

document.write("Value after addition is: " + myMathExp + "<br/>" + "<br/>");

// (i)

myMathExp--;

// (j)

document.write("Value after decrement is: " + myMathExp + "<br/>" + "<br/>");

// (k)

myMathExp = myMathExp / 3;

// (l)

document.write("the remainder is: " + myMathExp + "<br/>" + "<br/>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

var costticket = 600;
var buyticket = 5;

var totalTickik_c = costticket * buyticket;

document.write(
  "Total cost to buy 5 tickets to a movie is " +
    totalTickik_c +
    "PKR" +
    "<br/>" +
    "<br/>"
);

// 5. Write a script to display multiplication table of any number in your browser. E.g

var mytable = +prompt("table", "");

document.write("table of" + mytable + "<br/>");
for (var t = 1; t < 10; t++) {
  document.write(mytable + "x" + t + "=" + t * mytable + "<br/>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// (a)

var ct = +prompt("Celsius Temperature", "");

// (b)

var convToFah = (ct * 9) / 5 + 32;
document.write(
  ct + "<sup>0</sup>C" + " is " + convToFah + "<sup>0</sup>F" + "<br>" + "<br>"
);

// (d)

var ft = +prompt("Fahrenheit Temperature", "");

// (e)

var fahToConv = ((ft - 32) * 5) / 9;
document.write(
  ft + "<sup>0</sup>F" + " is " + fahToConv + "<sup>0</sup>C" + "<br>" + "<br>"
);

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// (a)

var price_I1 = 350;

// (b)

var price_I2 = 600;

// (c)

var Q_of_I1 = +prompt("Quantity of item 1", "");

// (d)

var Q_of_I2 = +prompt("Quantity of item 2", "");

// (e)

var shipCharges = 100;

// Compute the total cost & show the receipt in your browser.

document.write("Price of item 1 is " + price_I1 + "<br>");
document.write("Quantity os item 1 is " + Q_of_I1 + "<br>");
document.write("Price of item 2 is " + price_I2 + "<br>");
document.write("Quantity os item 2 is " + Q_of_I2 + "<br>");
document.write("Shipping Charges " + shipCharges + "<br>" + "<br>");

var totalCart = price_I1 * Q_of_I1 + price_I2 * Q_of_I2 + shipCharges;

document.write("Total cost of your order is " + totalCart + "<br>" + "<br>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var total_marks = 980;
var obtained_marks = +prompt("obtained marks in 980", "");

document.write("Total marks: " + total_marks + "<br>");
document.write("Marks obtained: " + obtained_marks + "<br>");
document.write(
  "Percentage: " + (obtained_marks / total_marks) * 100 + "%" + "<br>"
);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var tot_dollar = 104.8 * 10,
  tot_riyal = 28 * 25,
  tot_currency = tot_dollar + tot_riyal;
document.write("Total Currency in PKR:" + tot_currency + "<br>" + "<br>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var normExp = 2;
normExp = ((normExp + 5) * 10) / 2;
document.write(normExp + "<br>" + "<br>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// (a)

var currentYear = 2021;

// (b)

var userBirthYear = +prompt("Year of Your Age:", "");

// (c)

ageCalculated = currentYear - userBirthYear;

document.write("Current Year: " + currentYear + "<br>" + "<br>");
document.write("Birth Year: " + userBirthYear + "<br>" + "<br>");
document.write("Your Age is: " + ageCalculated + "<br>" + "<br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// (a)

var radius = +prompt("Radius:", "");

// (b)

var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius ** 2;

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>" + "<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// (a)

var Snack = prompt("Favorite Snack:", "");

// (b)

var currentAge = +prompt("Current Age:", "");

// (c)

var maxAge = +prompt("Maximum Age:", "");

// (d)

var perDayEat = +prompt("How many snacks you eat per day:", "");

// (e)

var totalEatInLife = (maxAge - currentAge) * perDayEat;

document.write("Favorite Snake: " + Snack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day:" + perDayEat + "<br>");
document.write(
  "You will need " +
    totalEatInLife +
    " " +
    Snack +
    " to last you until the ripe old age of " +
    maxAge +
    "<br>" +
    "<br>"
);

// Chapters no. 6-9

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var a = +prompt("give any int value", "");

document.write("Result" + "<br>");
document.write("The Value of a is " + a + "<br>" + "<br>");
document.write("------------------------" + "<br>" + "<br>");
document.write("The value of ++a is:" + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");
document.write("The value of ++a is:" + a + "<br>");
document.write("Now the value of a is: " + ++a + "<br>" + "<br>");
document.write("The value of ++a is:" + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");
document.write("The value of ++a is:" + a + "<br>");
document.write("Now the value of a is: " + --a + "<br>" + "<br>");

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var numOne = 2,
  numTwo = 1;
document.write("numOne is " + numOne + "<br>");
document.write("numTwo is " + numTwo + "<br>");

var result1 = --numOne - --numTwo + ++numTwo + numTwo--;
document.write("result1 is " + result1 + "<br>");

var result2 = --numOne;
document.write("result2 is " + result2 + "<br>");

var result3 = --numOne - --numTwo;
document.write("result3 is " + result3 + "<br>");

var result4 = --numOne - --numTwo + ++numTwo;
document.write("result4 is " + result4 + "<br>");

// 3. Write a program that takes input a name from user & greet the user.

var UserName = prompt("User Name:", "");
document.write(+"<br>" + "<br>" + "Hello " + UserName + "<br>" + "<br>");

// 4.

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var userIntValue = prompt("which table you want:", "");
if (userIntValue === "") {
  for (var z = 1; z < 11; z++) {
    document.write("<br/>" + 5 + "x" + z + "=" + z * 5 + "<br/>");
  }
} else {
  userIntValue = parseInt(userIntValue);
  for (var z = 0; z < 10; z++) {
    document.write(
      "<br/>" + userIntValue + "x" + z + "=" + z * userIntValue + "<br/>"
    );
  }
}

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// (a)

var usFSub = prompt("Subject 1:", "");
var usSSub = prompt("Subject 2:", "");
var usTSub = prompt("Subject 3:", "");

// (b)

var totMarkOfEach = 100;

// (c)

var obtFSub = +prompt(`your obtained mark of ${usFSub} out of 100 :`, "");

// (d)

var obtSSub = +prompt(`your obtained mark of ${usSSub} out of 100 :`, "");
var obtTSub = +prompt(`your obtained mark of ${usTSub} out of 100 :`, "");

// (e)

var totFSub = (obtFSub / totMarkOfEach) * 100;
var totSSub = (obtSSub / totMarkOfEach) * 100;
var totTSub = (obtTSub / totMarkOfEach) * 100;

var resultTable = `
<br>
<table>
  <tr>
    <th> subject </th>
    <th> Total Marks </th>
    <th> Obtained Marks </th>
    <th> Percentage </th>
  </tr>
  <tr>
    <td> ${usFSub} </td>
    <td> ${totMarkOfEach} </td>
    <td> ${obtFSub} </td>
    <td> ${totFSub}% </td>
  </tr>
  <tr>
    <td> ${usSSub} </td>
    <td> ${totMarkOfEach} </td>
    <td> ${obtSSub} </td>
    <td> ${totSSub}% </td>
  </tr>
  <tr>
    <td> ${usTSub} </td>
    <td> ${totMarkOfEach} </td>
    <td> ${obtTSub} </td>
    <td> ${totTSub}% </td>
  </tr>
  <tr>
    <td></td>
    <td col="2"> ${totMarkOfEach * 3} </td>
    <td> ${obtFSub + obtSSub + obtTSub} </td>
    <td> ${((obtFSub + obtSSub + obtTSub) / 300) * 100}% </td>
  </tr>
</table>
<br>
`;

document.write(resultTable);

// 7.

// Chapters no. 9-11

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var uscity = prompt("What is the name of your city", "Karachi");
uscity = uscity.toLowerCase();
if (uscity === "karachi") {
  document.write("<br><br> Welcome to the City of Lights <br><br>");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var usgender = prompt("Gender", "");
usgender = usgender.toLowerCase();
if (usgender === "male") {
  document.write("<br><br>Good morning Sir<br><br>");
} else {
  document.write("<br><br>Good morning Ma'am<br><br>");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var trafficSign = prompt("traffic Signal color", "");
trafficSign = trafficSign.toLowerCase();
if (trafficSign === "red") {
  document.write("<br><br>Must Stop<br><br>");
} else if (trafficSign === "yellow") {
  document.write("<br><br>Ready to move<br><br>");
} else if (trafficSign === "green") {
  document.write("<br><br>Move now<br><br>");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var fuel = +prompt("fuel", "");
if (fuel < 0.25) {
  document.write("<br><br>Please refill the fuel<br><br>");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

var conditionsArr = [];

// a.

var abc = 4;
if (++abc === 5) {
  alert("given condition for variable abc is true");
  conditionsArr.push(true);
}

// b.

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
  conditionsArr.push(true);
}

// c.

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
  conditionsArr.push(true);
}
if (c === 13) {
  alert("condition 2 is true");
  conditionsArr.push(true);
}
if (++c < 14) {
  alert("condition 3 is true");
  conditionsArr.push(true);
} else {
  conditionsArr.push(false);
}
if (c === 14) {
  alert("condition 4 is true");
  conditionsArr.push(true);
}

// d.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
  conditionsArr.push(true);
}

// e.

if (true) {
  alert("True");
  conditionsArr.push(true);
}
if (false) {
  alert("False");
  conditionsArr.push(false);
}

// f.

if ("car" < "cat") {
  alert("car is smaller than cat");
  conditionsArr.push(true);
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var totOfSub = +prompt("Total marks of all subjects", "");

var sub1 = +prompt("subject 1", "");
var sub2 = +prompt("subject 2", "");
var sub3 = +prompt("subject 3", "");

var totMarks = sub1 + sub2 + sub3;

var totPercent = (totMarks / totOfSub) * 100;

if (totPercent >= 80) {
  document.write("<br><br>Total Marks : " + totOfSub);
  document.write("<br><br>Marks obtained : " + totMarks);
  document.write("<br><br>Percentage : " + totPercent);
  document.write("<br><br>Grade : A-one");
  document.write("<br><br>Remarks : Excellent");
} else if (totPercent >= 70) {
  document.write("<br><br>Total Marks : " + totOfSub);
  document.write("<br><br>Marks obtained : " + totMarks);
  document.write("<br><br>Percentage : " + totPercent);
  document.write("<br><br>Grade : A");
  document.write("<br><br>Remarks : Good");
} else if (totPercent >= 60) {
  document.write("<br><br>Total Marks : " + totOfSub);
  document.write("<br><br>Marks obtained : " + totMarks);
  document.write("<br><br>Percentage : " + totPercent);
  document.write("<br><br>Grade : B");
  document.write("<br><br>Remarks : You need to improve");
} else if (totPercent < 60) {
  document.write("<br><br>Total Marks : " + totOfSub);
  document.write("<br><br>Marks obtained : " + totMarks);
  document.write("<br><br>Percentage : " + totPercent);
  document.write("<br><br>Grade : Fail");
  document.write("<br><br>Remarks : Sorry");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var mybot = Math.ceil(Math.random() * 6);

var myguess = +prompt("give us a number from 0 - 6", "");

if (mybot == myguess) {
  document.write("<br><br>Bingo! Correct answer");
} else if (++mybot == myguess || --mybot == myguess) {
  document.write("<br><br>Close enough to the correct answer");
} else {
  document.write("<br><br>sorry the answer is not match");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var compexp = +prompt("give your number", "");
var divexp = +prompt("Now, divide your given number by 3", "");
compexp = compexp / 3;
if (compexp == divexp) {
  document.write("<br><br>the answer is correct");
} else {
  document.write("<br><br>the answer is wrong");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var givint = +prompt("give your integer to check even or odd", "");
if (givint % 2 == 0) {
  document.write("<br><br>even number");
} else {
  document.write("<br><br>odd number");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt("give the temperature of your area", "");
if (temp > 40) {
  document.write("<br><br>It is to hot outsite.");
} else if (temp > 30) {
  document.write("<br><br>The weather today is normal.");
} else if (temp > 20) {
  document.write("<br><br>Today's weather is cool.");
} else if (temp > 10) {
  document.write("<br><br>OMG! today's weather is so cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var usnum1 = +prompt("give your first number to calculate", "");
var usnum2 = +prompt("give your second number to calculate", "");
var usoprator = prompt("give your operator like + , - , * , / , %", "");

if (usoprator === "+") {
  document.write("<br><br>" + usnum1 + usnum2);
} else if (usoprator === "-") {
  document.write("<br><br>" + usnum1 - usnum2);
} else if (usoprator === "*") {
  document.write("<br><br>" + usnum1 * usnum2);
} else if (usoprator === "/") {
  document.write("<br><br>" + usnum1 / usnum2);
} else if (usoprator === "%") {
  document.write("<br><br>" + (usnum1 % usnum2));
}

// Chapters no. 12-13

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// sir I do not understand this question.
// It is not possible

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var usint1 = +prompt("give your first integer", "");
var usint2 = +prompt("give your second integer", "");

if (usint1 > usint2) {
  document.write("<br><br>" + usint1 + " is larger then " + usint2);
} else if (usint1 < usint2) {
  document.write("<br><br>" + usint2 + " is larger then " + usint1);
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var usnumber = prompt(
  "give us a no. like positive no.,nigative no. or zero",
  "-"
);

if (usnumber.indexOf(0) == "0") {
  document.write("<br><br>the number is zoro");
} else if (usnumber.slice(0, 1) == "-") {
  document.write("<br><br>the number is negative.");
} else {
  document.write("<br><br>the number is positive");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var uschar = prompt("write a vowel character", "");
uschar = uschar.toLowerCase();
var chararr = ["a", "e", "i", "o", "u"];
for (var f = 0; f < chararr.length; f++) {
  if (uschar === chararr[f]) {
    document.write("<br><br>true");
  } else {
    document.write("<br><br>false");
  }
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var usPassword = prompt("enter your password.", "f");
var usPassConf = prompt("please confirm your password", "f");
while (true) {
  if (usPassConf === "") {
    alert("the password is blank please enter the password.");
    usPassConf = prompt("please confirm your password", "");
  } else if (usPassword === usPassConf) {
    alert("your password is correct you can enter.");
    break;
  } else {
    alert(`your password is incorrect: ${usPassConf}`);
    break;
  }
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
  document.write("<br><br>" + greeting);
} else {
  greeting = "Good evening";
  document.write("<br><br>" + greeting);
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = 1900;
if (time >= 0000 && time < 1200) {
  document.write('<br><br>"Good morning"');
} else if (time >= 1200 && time < 1700) {
  document.write('<br><br>"Good afternoon"');
} else if (time >= 1700 && time < 2100) {
  document.write('<br><br>"Good evening"');
} else if (time <= 2100 && time < 2359) {
  document.write('<br><br>"Good night"<br>');
}

// Chapters no. 14 - 16

// 1. Declare an empty array using JS literal notation to store student names in future.

var studentName = [];

// 2. Declare an empty array using JS object notation to store student names in future.

var studname = {};

// 3. Declare and initialize a strings array.

var stringsArray = ["abc", "def"];

// 4. Declare and initialize a numbers array.

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false, true, true, false];

// 6. Declare and initialize a mixed array.

var mixedArray = ["abc", 123, true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

var eduqual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
var j = 0;
for (var e = 0; e < eduqual.length; e++) {
  j++;
  document.write("<br>" + j + ") " + eduqual[e] + "<br>");
}

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

studentName[0] = "Michael";
studentName[1] = "Jhon";
studentName[2] = "Tony";

var totScore = 500;
var studentScore = [320, 230, 480];
var scorePercent = [];

for (var s = 0; s < studentScore.length; s++) {
  scorePercent[s] = (studentScore[s] / totScore) * 100;
  document.write(
    "<br><br>Score of " +
      studentName[s] +
      " is " +
      studentScore[s] +
      ". Percentage: " +
      scorePercent[s] +
      "%"
  );
}

// 9. Initialize an array with color names. Display the array elements in your browser.

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated array in your browser.

// e. Delete the last color in the array. Display the updated array in your browser.

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var colorname = [];
document.write("<br>" + colorname + "<br>");

var uscolor;

// (a)

uscolor = prompt("what color you want to add in the biginning", "");
colorname.unshift(uscolor);
document.write("<br>" + colorname + "<br>");

// (b)

uscolor = prompt("what color you want to add in the end", "");
colorname.push(uscolor);
document.write("<br>" + colorname + "<br>");

// (c)

colorname.unshift("orange");
colorname.unshift("skygreen");
document.write("<br>" + colorname + "<br>");

// (d)

colorname.shift();
document.write("<br>" + colorname + "<br>");

// (e)

colorname.pop();
document.write("<br>" + colorname + "<br>");

// (f)

var addCnum = +prompt("on which index you want to add color", "");
uscolor = prompt("what color you want to add in this index", "");
colorname.splice(addCnum, 0, uscolor);
document.write("<br>" + colorname + "<br>");

// (g)

var removeCnum = +prompt("on which index you want to remove color", "");
colorname.splice(removeCnum, 1);
document.write("<br>" + colorname + "<br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method

var studScore = [320, 230, 480, 120];
document.write("<br>Scores of Students : " + studScore + "<br>");
studScore.sort();
document.write("<br>Ordered Scores of Students : " + studScore + "<br>");

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var usCities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Pishawar"];
document.write("<br>Cities list:<br>" + usCities + "<br>");

var selectedCities = usCities.slice(0, 3);
document.write("<br>Cities list:<br>" + selectedCities + "<br>");

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arrstr = ["This ", " is ", " my ", " cat"];
document.write("<br>Array:<br>" + arrstr + "<br>");

arrstr = arrstr.join(" ");
document.write("<br>String:<br>" + arrstr + "<br>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var newArr = [];
newArr.push("Keyboard");
newArr.push("Mouse");
newArr.push("Printer");
newArr.push("Monitor");

document.write("<br>Devices:<br>" + newArr + "<br>");

for (var y = 0; y < newArr.length; y++) {
  document.write("<br>Out:<br>" + newArr[y] + "<br>");
}

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

var newReverseArr = [];
newReverseArr.push("Keyboard");
newReverseArr.push("Mouse");
newReverseArr.push("Printer");
newReverseArr.push("Monitor");

document.write("<br>Devices:<br>" + newReverseArr + "<br>");

newReverseArr.reverse();
for (var d = 0; d < newReverseArr.length; d++) {
  document.write("<br>Out:<br>" + newReverseArr[d] + "<br>");
}

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(
  `
  <br>
  <select>
    <option value="">Phone manufacturers</option>
    <option value="">${phone[0]}</option>
    <option value="">${phone[1]}</option>
    <option value="">${phone[2]}</option>
    <option value="">${phone[3]}</option>
    <option value="">${phone[4]}</option>
    <option value="">${phone[5]}</option>
  </select>
  <br>
  `
);

// Chapters no. 17 - 20

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var multiArr = [[], [], []];

// 2. Declare and initialize a multidimensional array representing the following matrix:

var multiDimArr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
document.write("<br>" + multiDimArr + "<br>");

// 3. Write a program to print numeric counting from 1 to 10.

for (var count = 1; count < 11; count++) {
  document.write("<br><br>" + count);
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var mynewtable = +prompt("table", "");
var tlen = +prompt("give your table lenght", "");

document.write("Multiplication table of " + mynewtable + "<br/>");
document.write("Lenght " + tlen + "<br/>");
for (var tnew = 1; tnew < tlen; t++) {
  document.write(mynewtable + "x" + tnew + "=" + tnew * mynewtable + "<br/>");
}

// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var fr = 0; fr < fruits.length; fr++) {
  document.write("<br>" + fruits[fr] + "<br>");
}

for (var el = 0; el < fruits.lenght; el++) {
  document.write("<br>Element at index" + el + "is" + fruits[el] + "<br>");
}

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var intArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// (a)

document.write("<br>Counting:<br>");
for (var ct = 1; ct < intArr.length - 4; ct++) {
  document.write(ct + ",");
}

// (b)

document.write("<br>Reverse:<br>");
for (var rev = 10; rev > 0; rev--) {
  document.write(rev + ",");
}

// (c)

document.write("<br>Even:<br>");
for (var even = 0; even < intArr.length + 1; even++) {
  if (intArr[even] % 2 != 0) {
    document.write(even + ",");
  }
}

// (d)

document.write("<br>Odd:<br>");
for (var odd = 0; odd < intArr.length; odd++) {
  if (intArr[odd] % 2 == 0) {
    document.write(odd + ",");
  }
}

// (e)

document.write("<br>series:<br>");
for (var series = 2; series < intArr.length + 1; series++) {
  if (intArr[series] % 2 != 0) {
    document.write(series + "k,");
  }
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

var sweets = [ "cake", "apple pie", "cookie", "chips", "patties"];
var searchA = prompt("search your sweet", "");
searchA = searchA.toLowerCase()

for (var w = 0; w < sweets.length ; w++) {
  if( searchA === sweets[w] ) {
    document.write(`<br>${searchA} is available at index ${w} in our bakery<br>`);
  }
  else{
    document.write(`<br>we are sorry! ${searchA} is not available in our bakery<br>`);
  }
}

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

var largeArr = [24, 53, 78, 91, 12];
document.write("Array items: "+largeArr)
document.write("<br>the largest number is "+Math.max(...largeArr)+"<br>");

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var smallArr = [24, 53, 78, 91, 12]
document.write("Array items: "+largeArr)
document.write("<br>the smallest number is "+Math.min(...largeArr)+"<br>");

// 10. Write a program to print multiples of 5 ranging 1 to 100.

for(var v = 1 ; v < 101 ; v++){
  v = v + 4;
  document.write(v+",");  
}