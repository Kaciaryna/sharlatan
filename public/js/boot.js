$(function() {
	var expand = $(".expand");
	var collapse = $(".collapse");
	var spoiler = $(".spoiler");

function spoilerShow() {
    expand.add(collapse).click(function(e) {
      e.preventDefault();
      expand.add(spoiler).add(collapse).toggle();
    }) 
  }
spoilerShow();


   $('a').each(function(i, link) {
     $("li").each(function(i, point) {
   		 $(link).click(function() {
   		   if ($(this).attr("href").split("#")[1] == $(point).attr("id")) {
            $(point).addClass("clicked");
   		      setTimeout(function() {$(point).removeClass("clicked")}, 700);
   	      } 
   		  })
   	  })
    })
});