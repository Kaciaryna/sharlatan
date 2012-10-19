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
    },
    callbacks: {
      beforeShow: function(subjects, internalCallback) {
        subjects.modal.find('img').attr(imageAttributes);
        return internalCallback(subjects);
      },
      positioning: function(subjects) {
        subjects.modal.css('margin-left', Math.round(imageAttributes.width / -2));
      }
    }
  });

  function compareSize($image) {
    var minWidth = Math.min($image.attr("data-width"), screen.availWidth*0.7);
    return {
      "width": minWidth,
      "src": $image.attr("src")
    };
  }

  var $sourceImage = $(".incut img");
  $sourceImage.each(function(i, image) {
    var $image = $(image);
    $("<img/>")
      .attr("src", $image.attr("src"))
      .load(function() {
        $image.attr("data-width", this.width);
        $image.attr("data-height", this.height);
      });
  });

  var imageAttributes;
  $(".incut span").click(function() {
    imageAttributes = compareSize($(this).prevAll("img"));
    $('div.modal').trigger('show');
  })
});