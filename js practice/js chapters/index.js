//   chapter 1 assigment

// alert("Error! please Enter a valid password");

// alert("well come to js land\nHappy coding!");

// alert("well come to js land...");
// alert("Happy coding!\nprevent this page for creating additional dialogs. ");
// alert("Hello.. i can run js through my web browsers console");





        //  chapter 2 assigment




//         var studentname = "Daim hussain"
//         var age = 18 ;
//         var course = "web developer"
       

//         alert("" + studentname);
//         alert( age + " years old ");
//         alert("" + course);
        

//        alert("pizza\npizz\npiz\npi\np\ni")


//        var email = "daimhussainqk@gmail.com";

// alert("My email address is " + email);


//        var book = "A smarter way to learn JavaScript";

// alert("I am trying to learn from the book " + book);

// alert("hello js");
// document.writeln("hello js ");





              // chapter 3


                //       1


//      var age = 15
//      alert( " i am " +  15 + " years old ");


                //        2

//      let birthyear = 2009
//      document.writeln("my birth year is" + birthyear);


                //    3


//      var username = prompt("Enter your name");
//      var productname = prompt("Enter your product name");
//      var quantity = +prompt("Enter product quantity");
//      var storename = "daim store"

//      document.writeln("<h1>" + username + " order " +  quantity  + " " + productname + " from your " + storename + "</h1>");



              //     chapter 4


        
      
// document.write("<h1>Rules for naming JS variables</h1>");

// document.write("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable <br>");

// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name <br>");

// document.write("Variable names are case sensitive <br>");

// document.write("Variable names should not be JS keywords");



       //   chapter 5


                //       1


//        let num1 = 5;
//        let num2 = 3;

//        let sum = num1 + num2;

//        document.writeln(" sum of " + num1 + " and " + num2 + " is " + sum );




                        //      2

// let num;


// document.write("Value after variable declaration is: " + num + "<br>");


// num = 5;


// document.write("Initial value: " + num + "<br>");


// num++;


// document.write("Value after increment is: " + num + "<br>");


// num = num + 7;


// document.write("Value after addition is: " + num + "<br>");


// num--;


// document.write("Value after decrement is: " + num + "<br>");


// let remainder = num % 3;


// document.write("The remainder is: " + remainder);


                //       3




// let ticketPrice = 600;


// let totalTickets = 5;


// let totalCost = ticketPrice * totalTickets;


// document.write("Cost of one movie ticket is: " + ticketPrice + " PKR<br>");
// document.write("Total cost to buy " + totalTickets + " tickets is: " + totalCost + " PKR");




                        //    4
                            


// let num = 5;

// document.write("Multiplication Table of " + num + "<br><br>");

// for (let i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }



                        //  5


// let celsius = 25;


// let fahrenheit = (celsius * 9/5) + 32;


// document.write(celsius + "°C is " + fahrenheit + "°F<br><br>");





                // 6



// let fahrenheit2 = 77;


// let celsius2 = (fahrenheit2 - 32) * 5/9;


// document.write(fahrenheit2 + "°F is " + celsius2 + "°C");



   
        //       7
    
 
// var price1 = 300;
// var price2 = 200;
// var quantity1 = 2;
// var quantity2 = 3;
// var shippingCharges = 100;

// var totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

// document.writeln("price of item 1: " + price1 + "<br>");
// document.write("Quantity of Item 1: " + quantity1 + "<br>");
// document.write("price of Item 2: " + price2 + "<br>");
// document.write("Quantity of Item 2: " + quantity2 + "<br>");
// document.write("shippingCharges: " + shippingCharges + "<br><br>");
// document.write("<br>totalCost: " + totalCost + "</br>");





        //        8

// // Total marks
// var totalMarks = 500;

// // Marks obtained
// var obtainedMarks = 425;

// // Percentage calculation
// var percentage = (obtainedMarks / totalMarks) * 100;

// // Show result in browser
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Obtained Marks: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");




                //    9


// var totalPKR = (10 * 104.80) + (25 * 28);


// document.write("Total Currency in PKR: " + totalPKR);


                // 10


// var num = 10;


// var result = ((num + 5) * 10) / 2;

// document.write("Initial Number: " + num + "<br>");
// document.write("Final Result: " + result);


        //        11



// var currentYear = 2026;



// var birthYear = 2005;


// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;


// document.write("They are either " + age2 + " or " + age1 + " years old");



// 12
 



// var radius = 7;


// var pi = 3.142;


// var circumference = 2 * pi * radius;


// var area = pi * radius * radius;


// document.write("Radius: " + radius + "<br>");
// document.write("The circumference is " + circumference + "<br>");
// document.write("The area is " + area);


                //      13


var snack = "Chips";


var currentAge = 20;

var maxAge = 70;

var perDay = 2;


var totalNeeded = (maxAge - currentAge) * 365 * perDay;


document.write("Favorite Snack: " + snack + "<br>");
document.write("You will need " + totalNeeded + " " + snack + 
" to last you until the ripe old age of " + maxAge);

