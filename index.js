$(document).ready(function() {
	$(".submitButton").click(function(e) {
		e.preventDefault()
		const userName = $('.nameInput').val()
		$(".visitorList").append("<p>" + userName + "</p>")
		$(".nameInput").val("")
	});
});