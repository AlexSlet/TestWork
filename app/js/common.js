
$(function() {

 $(document).on("click", ".form__btn", function(){
  var comment = $("#textarea").val();
  		Data = new Date();
			Year = Data.getFullYear();
			Month = Data.getMonth();
			Day = Data.getDate();
 
			// Преобразуем месяца
			switch (Month)
			{
			  case 0: fMonth="января"; break;
			  case 1: fMonth="февраля"; break;
			  case 2: fMonth="марта"; break;
			  case 3: fMonth="апреля"; break;
			  case 4: fMonth="мае"; break;
			  case 5: fMonth="июня"; break;
			  case 6: fMonth="июля"; break;
			  case 7: fMonth="августа"; break;
			  case 8: fMonth="сентября"; break;
			  case 9: fMonth="октября"; break;
			  case 10: fMonth="ноября"; break;
			  case 11: fMonth="декабря"; break;
			}
  // $("<div class='bodyComment'>" + comment + "</div>").appendTo(".lastFeedback__field");
  $("<div class=\"lastFeedback__field-comment\">\n" +
            "<div class=\"userName\">\n" +
            "<h4>My Name</h4>\n" +
            "<span class=\"date\">"+Day+" "+fMonth+" "+Year+"</span>\n" +
            "</div>\n" +
            "<div class=\"bodyComment\">"
   + comment +
   "</div></div>").appendTo(".lastFeedback__field");
 });

});