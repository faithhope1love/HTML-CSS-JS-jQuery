<!--Corin - 11/12/18-->
"use strict";
var $ = function (id) {
	return document.getElementById(id);
};

var taxOwed;
var income;

var calculateTax = function(income) {
if (income > 0 && income < 9275) {
taxOwed = (income * .10) + 0;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
return taxOwed;
}

else if (income > 9275 && income < 37650) {
taxOwed = (income * .15) + 927.50;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
return taxOwed;
}

if (income > 37650 && income < 91150) {
taxOwed = (income * .25) + 5183.75;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
}

else if (income > 91150 && income < 190150) {
taxOwed = (income * .28) + 18558.75;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
return taxOwed;
}

if (income > 190150 && income < 413350) {
taxOwed = (income * .33) + 46278.75;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
}

else if (income > 413350) {
taxOwed = (income * .35) + 119934.75;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
return taxOwed;
}

else if (income < 415050) {
taxOwed = (income * 39.6) + 120529.75;
taxOwed = parseFloat(taxOwed);
taxOwed = taxOwed.toFixed(2);
return taxOwed;
}

};

var processEntry = function(){
income = parseInt($("income").value);

if(isNaN(income)) {
alert("ERROR! Your income tax must be a number. \nPlease enter a number.");
}

else if (income <= 0) {
alert("ERROR! Your income tax must be greater than zero. \nPlease enter an income greater than zero.");
}

else {
$("taxOwed").value = calculateTax(income);
}
};  

window.onload = function () {
$("calculate").onclick = processEntry;
$("income").focus();
};