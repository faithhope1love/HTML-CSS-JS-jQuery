/* Corin - 11/26/18 */
$(document).ready(function() {
//cancel the defaul action of the link
	evt.preventDefault();

//preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
}); //end each

//set up handlers for links
$("#image_list a").click(function(evt) {

//swap image
	var imageURL = $(this).attr("href");
	$("#image").attr("src", imageURL);

//swap caption
	var caption = $(this).attr("title");
	$("#caption").text(caption);
}); //end click

//move focus to the first thumbnail
$("li:first-child a").focus();
}); //end ready
