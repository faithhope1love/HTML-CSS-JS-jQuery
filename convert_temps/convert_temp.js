<!-- Corin PriceHoward - 11/18/18-->
"use strict";
var $ = function(id) { 
	return document.getElementById(id); 
};

var toFahrenheit = function() {
$("degrees_computed").value = ($("degrees_entered").value - 32) / 1.8;
document.getElementById("degree_label_1").innerHTML = "Enter C Degrees:";
document.getElementById("degree_label_2").innerHTML = "Degrees Fahrenheit:";
};
var toCelsius = function() {
$("degrees_computed").value = (1.8 * $("degrees_entered").value) + 32;
document.getElementById("degree_label_1").innerHTML = "Enter F Degrees:";
document.getElementById("degree_label_2").innerHTML = "Degrees Celsius:";
};

var convertTemp = function() {
if(toCelsius) { 
alert("Fahrenheit temperature " + $("degrees_entered").value + 
" converted to Celsius temperature is " + $("degrees_computed").value); }
else if(toFahrenheit) { 
alert("Celsius temperature " + $("degrees_entered").value + 
" converted to Fahrenheit temperature is " + $("degrees_computed").value); }
};

var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};