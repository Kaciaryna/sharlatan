$(function() {
  $(".details").click(function() {
    $(this).next(".spoiler").toggle();
  });
  
   $("a").on( 'click', function() {
   	var id = $(this).attr("href");
   	$(".clicked").removeClass("clicked");
   	$(id).addClass("clicked");
   })
});