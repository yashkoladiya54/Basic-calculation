// 1.  to find maximum between two numbers

// let num1 = 10;
// let num2 = 20;

// if (num1 > num2) {
//     console.log(num1 + " is the maximum.");
// } else if (num2 > num1) {
//     console.log(num2 + " is the maximum.");
// } else {
//     console.log("Both numbers are equal.");
// }



// 2. check whether a number is even or odd

// let number = 7;  

// if (number % 2 === 0) {
//     console.log(number + " is even.");
// } else {
//     console.log(number + " is odd.");
// }


// 3. to check Leap Yea

// let year = 2024;  

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


// 4.calculate profit or loss


// let costPrice = 500;   
// let sellingPrice = 600;  

// if (sellingPrice > costPrice) {
//     let profit = sellingPrice - costPrice;
//     console.log("Profit: " + profit);
// } else if (costPrice > sellingPrice) {
//     let loss = costPrice - sellingPrice;
//     console.log("Loss: " + loss);
// } else {
//     console.log("No profit, no loss.");
// }





// 5. Write a to input electricity unit charge and calculate the total electricity bill according to the given condition:

// let units = 275;  
// let bill = 0;


// if (units <= 50) {
//     bill = units * 0.50;
// } else if (units <= 150) {
//     bill = (50 * 0.50) + (units - 50) * 0.75;
// } else if (units <= 250) {
//     bill = (50 * 0.50) + (100 * 0.75) + (units - 150) * 1.20;
// } else {
//     bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (units - 250) * 1.50;
// }


// let surcharge = bill * 0.20;
// let totalBill = bill + surcharge;

// console.log("Total Electricity Bill: Rs. " + totalBill.toFixed(2));




// 6.Write a to input basic salary of an employee and calculate gross salary according to given conditions.

// let basicSalary = 15000;  
// let HRA, DA, grossSalary;


// if (basicSalary <= 10000) {
//     HRA = basicSalary * 0.20;
//     DA = basicSalary * 0.80;
// } else if (basicSalary <= 20000) {
//     HRA = basicSalary * 0.25;
//     DA = basicSalary * 0.90;
// } else {
//     HRA = basicSalary * 0.30;
//     DA = basicSalary * 0.95;
// }


// grossSalary = basicSalary + HRA + DA;

// console.log("Gross Salary: Rs. " + grossSalary.toFixed(2));