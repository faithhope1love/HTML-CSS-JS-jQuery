/* Corin - 11/25/18 */
$(document).ready(function() {

$("#reservation_form").submit (
	function(event) {
	var isValid = true;

//arrival date validation
  	var arrival_datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    	var arrival_date = $("#arrival_date").val().trim();
	
	if (arrival_date == "") {
	$("#arrival_date").next().text("*This field is required.");
	isValid = false;
	}

	else if (!arrival_datePattern.test(arrival_date)) {
	$("#arrival_date").next().text("Use X/X/XXXX or XX/XX/XXXX format.");
	isValid = false;
	}
	
	else {
	$("#arrival_date").next().text("");
	}
$("#arrival_date").val(arrival_date);

//nights validation and number only format
	var nightsPattern = /^[0-9]+$/
	var nights = $("#nights").val().trim();
	
	if (nights == "") {
	$("#nights").next().text("*This field is required.");
	isValid = false;
	}

	else if (!nightsPattern.test(nights)) {
	$("#nights").next().text("Invalid input. Number(s) only.");
	isValid = false;
	}
	
	else {
	$("#nights").next().text("");
	}
$("#nights").val(nights);

//name validation and letters only format
  	var namePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    	var name = $("#name").val().trim();
	
	if (name == "") {
	$("#name").next().text("*This field is required.");
	isValid = false;
	}

	else if (!namePattern.test(name)) {
	$("#name").next().text("Enter first and last name.");
	isValid = false;
	}
	
	else {
	$("#name").next().text("");
	}
$("#name").val(name);

//email validation
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
   	var email = $("#email").val().trim();
	
	if (email == "") {
	$("#email").next().text("*This field is required.");
	isValid = false;
	}

	else if (!emailPattern.test(email)) {
	$("#email").next().text("Must be a valid email address.");
	isValid = false;
	}
	
	else {
	$("#email").next().text("");
	}
$("#email").val(email);

//phone number validation
  	var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    	var phone = $("#phone").val().trim();
	
	if (phone == "") {
	$("#phone").next().text("*This field is required.");
	isValid = false;
	}

	else if (!phonePattern.test(phone)) {
	$("#phone").next().text("Use XXX-XXX-XXX format.");
	isValid = false;
	}
	
	else {
	$("#phone").next().text("");
	}
$("#phone").val(phone);

	if(isValid == false) {
	event.preventDefault(); 
	}

} //end function
); //end submit
}); //end ready
