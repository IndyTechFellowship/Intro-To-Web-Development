$(document).ready(function() {
	$("h1").click(function(e) {
		console.log("You clicked an h1")
		console.log(e.target.innerText)
	})
})