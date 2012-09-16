$(function() {

  $(".details").each(function(i, link) {
    $(link).attr("data-text", "Скрыть подробности");
    $(link).click(function() {
      $(this).next(".spoiler").toggle();

      var currentText = $(this).text();
      var newText = $(this).attr("data-text");
      $(this).text(newText);
      $(this).attr("data-text", currentText);
    });
  });

   $("a").on( 'click', function() {
     var id = $(this).attr("href");
     $(".clicked").removeClass("clicked");
     $(id).addClass("clicked");
   });

  $('div.modal').omniWindow({
    overlay: {
      hideClass: 'ow_closed'
    },
    modal: {
      hideClass: 'ow_closed'
    }
  });
  $(".incut span").click(function() {
    $('div.modal').trigger('show');
  })
});