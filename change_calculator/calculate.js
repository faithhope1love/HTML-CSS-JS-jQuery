/* Corin 12/14/18 */
"use strict";
$(document).ready(function(){
    $("#calculate").click( function() {
	var cents, quarters, dimes, nickles, pennies;

	var cents = $("#cents").val() || 0;
	cents = parseFloat(cents);

	if (cents < 0 || cents > 99) {
		alert ("Please enter a number between 0 and 99.")
	}

	else {
	quarters = Math.floor(cents/25);
	cents = cents % 25;
	dimes = Math.floor(cents/10);
	cents = cents % 10;
	nickles = Math.floor(cents/5);
	pennies = cents % 5;

	$("#quarters").val(quarters);
	$("#dimes").val(dimes);
	$("#nickles").val(nickels);
	$("#pennies").val(pennies);
	}
    }); // end click() method    

// set focus on cents text box on initial load
    $("#cents").focus();        
}); // end ready() method