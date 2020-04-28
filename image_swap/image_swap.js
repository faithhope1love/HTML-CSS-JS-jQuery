/* Corin Price-Howard 11/25/18 */
$(document).ready(function() {
$("#image_list a").click(function(evt) {
//cancel the default action of the link
	evt.preventDefault();
		$('#caption').fadeOut(1000);
		$('#image').fadeOut(1000);
		change($(this)).delay(1000); 
}); //end evt function
}); //end ready
	var change = function(img) {
	var caption = img.attr("title");
	var imageURL = img.attr("href");
		$("#caption").text(caption);
		$("#caption").fadeIn();
		$("#image").attr("src", imageURL);
		$("#image").fadeIn();
}; //end img function