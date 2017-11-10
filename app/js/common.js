$(function() {

	$(document).on("click", ".form__btn", function(){
		var comment = $("#textarea").val();
		$("<div class='bodyComment'>" + comment + "</div>").appendTo(".lastFeedback__field");
	});

});
