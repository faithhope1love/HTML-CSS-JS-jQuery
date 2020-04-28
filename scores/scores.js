"use strict";
$(document).ready(function() {
	var scores = [];
    
    var displayScores = function () {
	scores.sort();

	$("#first_name").val(scores.join("\n") );
	$("#last_name").val(scores.join("\n") );
	$("#score").val(scores.join("\n") );
	$("#scores").focus();
    };
    
    $("#add_button").click(function() {
	var textbox = $("#scores");
	var scores = textbox.val();
	if (scores === "") {
		alert ("Please enter first name/last name/score.")
		textbox.focus();
	} else {
	scores.push(scores);
	textbox.val("");
	displayScores();

	// get the add form ready for next entry
       	$("#first_name").val( "" );
      	$("#last_name").val( "" );
    	$("#score").val( "" );
      	$("#first_name").focus();
	}
    }); // end click()
    
    $("#clear_button").click(function() {

        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click(function() {
        
    }); // end click()
    
    $("#first_name").focus();
}); // end ready()