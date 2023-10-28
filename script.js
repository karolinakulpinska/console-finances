console.log("Financial Analysis");
console.log("----------------");

var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

// Variable to store total number of months included in the dataset 
var totalMonths = finances.length;
// Log the total number of months in the dataset
console.log("Total Months: " + totalMonths);

// Variable to store the net total amount of Profits/Losses over the entire period

  // 1. How to access an array within an array
  // "To access the elements of the inner arrays, you use two sets of square brackets"
    // test:
    // console.log(finances[1][1]);

  // 2. Logs profit/loss for each month
    // for (var i = 0; i < finances.length; i++) {
    //   console.log(finances[i][1]);
    // };

  // 3. How to add values of profits/losses for all months
  // "The Addition Assignment Operator (+=) adds a value to a variable."
    // test:
    // var finances1 = [
    //   ['Jan-2010', 867884],
    //   ['Feb-2010', 984655],
    //   ['Mar-2010', 322013],
    //   ['Apr-2010', -69417],
    //   ['May-2010', 310503],
    //   ['Jun-2010', 522857],
    //   ['Jul-2010', 1033096],
    // ];
  // A variable to store the sum
    // var sum1 = 0;
    // for (var i = 0; i < finances1.length; i++) {
    //   sum1 += finances1[i][1];
    // };
    // console.log("The total amount of profits/losses over the entire period is $" + sum1); //$3,971,591

// Variable to store the total amount of profits/losses over the entire period
var total = 0;
// Loop through the array of monthly values starting at the first element [0]
for (var i = 0; i < finances.length; i++) {
  // Add all values together and store them in a variable
  total += finances[i][1];
};
// Log the total amount of profits/losses over the entire period
console.log("Total: $" + total); 

// The average of the changes, greatest increase and decrease in Profit/Losses over the entire period.
// Variables to store the difference on a monthly basis, total change, average change, biggest increase and biggest decrease in profits/losses
var differenceMonthly = 0;
var totalChange = 0;
var averageChange = 0;
var greatestIncrease = ['Jan-2010', 0];
var greatestDecrease = ['Jan-2010', 0];
// Loop through the array of monthly values starting at the second element [1] since we need to compare current element to previous one
for (var i = 1; i < finances.length; i++) {
  // Calculate the difference on a monthly basis comparing current month to previous one and store in a variable
  differenceMonthly = finances[i][1] - finances[i - 1][1];
  // Add all values to total change and store the sum in a variable
  totalChange += differenceMonthly;
  // Calculate the average change in profit/losses by dividing the total change by number of months - 1 and store the result in a variable
  averageChange = totalChange / finances.length - 1;
  // If the difference on a monthly basis is greater than the current greatest increase, update the month and value of current greatest increase and store in a var
  if (differenceMonthly > greatestIncrease[1]) {
    greatestIncrease = [finances[i][0], differenceMonthly];
    // If the difference on a monthly basis is lesser than the current greatest decrease, update the month and value of current greatest decrease and store in a var
  } else if (differenceMonthly < greatestDecrease[1]) {
    greatestDecrease = [finances[i][0], differenceMonthly];
  };
};
// Log the average change and rounds the number to the nearest 100
console.log("Average Change: $" + Math.round(averageChange/100)*100); 
// Log the greatest increase
console.log("Greatest Increase in Profits/Losses: " + greatestIncrease[0] + " ($" + greatestIncrease[1] + ")");
// Log the greatest decrease
console.log("Greatest Decrease in Profits/Losses: " + greatestDecrease[0] + " ($" + greatestDecrease[1] + ")");








