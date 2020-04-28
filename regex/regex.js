/*Corin - 12/3/18 */

"use strict";
$(document).ready(function() {
  
  
$("#validate").click(function() {
 
       
var phone = $("#phone").val();


//original pattern
//var pattern = /^\d{3}-\d{3}-\d{4}$/;

//add an optionl 1 to the pattern
//var pattern = /^(1\s|1|)?\d{3}-\d{3}-\d{4}$/;

//can add dashes or periods
//var pattern = /^(1\s|1|)?\d{3}[-\s\.]\d{3}[-\s\.]\d{4}$/;

//can have optional parentheses, blank spaces instead of dashes or periods
var pattern = /^(1\s|1|)?[\+]?[(]?\d{3}[)]?[-\s\.]?\d{3}-\d{4}$/;    
               
// 999-999-9999
        

var isValid = pattern.test(phone);

        
$("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        
$("#phone").focus();
    }); // end click()
 

//$("#phone").val( "123-456-7890" );   
    
$("#phone").val( "1 (123) 456-7890" );  // set default phone number
    
$("#phone").focus(); // set focus on initial load
    
}); // end ready()
