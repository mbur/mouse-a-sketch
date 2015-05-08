console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!")

// var currentColor = $("input");
// var newColor = currentColor.val();

var currentColor = $("input").val();

$("input").change(function(){
	console.log("Color changed");
	currentColor = $("input").val();
})

$("td").mouseover(function() {
	$(this).css("background-color", currentColor);
})



})

// $("td").mouseover(function() {
// 	console.log("here");
// })