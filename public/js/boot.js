(function() {
  function manageSpoiler() {
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
  }

  function highlightLink() {
    $("sup>a").on('click', function() {
      var id = $(this).attr("href");
      $(".clicked").removeClass("clicked");
      $(id).addClass("clicked");
    });
  }

  function expandImage() {
    var $incutModal = $('.modal');

    $incutModal.omniWindow({
      overlay:   {
        hideClass: 'ow_closed'
      },
      modal:     {
        hideClass: 'ow_closed'
      },
      callbacks: {
        beforeShow:  function(subjects, internalCallback) {
          subjects.modal.find('img').attr(imageAttributes);
          return internalCallback(subjects);
        },
        positioning: function(subjects) {
          subjects.modal.css('margin-left', Math.round(imageAttributes.width / -2));
        }
      }
    });

    function compareSize($image) {
      var minWidth = Math.min($image.attr("data-width"), screen.availWidth * 0.7);
      return {
        "width": minWidth,
        "src":   $image.attr("src")
      };
    }

    var $sourceImage = $(".incut img");
    $sourceImage.each(function(i, image) {
      var $image = $(image);
      $("<img/>").attr("src", $image.attr("src")).load(function() {
        $image.attr("data-width", this.width);
        $image.attr("data-height", this.height);
      });
    });

    var imageAttributes;
    $(".incut span").click(function() {
      imageAttributes = compareSize($(this).prevAll("img"));
      $incutModal.trigger('show');
    });
  }

  function showFirstVisitModal() {
    var position = $('.science').offset(), $firstVisit = $('.first_time_modal');

    $firstVisit.omniWindow({
      modal:     {
        hideClass: 'mod_closed'
      },
      callbacks: {
        positioning: function(subjects) {
          subjects.modal.css({
            left: position.left + 10,
            top:  position.top - Math.round(subjects.modal.height() / 2) - 5
          });
        },
        afterShow:   function(subjects, internalCallback) {
          $('.close_btn').click(function(e) {
            e.preventDefault();
            $firstVisit.trigger('hide');
          });
          return internalCallback(subjects);
        }
      }
    });

    if (!($.cookie('already_visited'))) {
      $firstVisit.trigger('show');
      $.cookie('already_visited', true, {expires: 20});
    }

  }

  $(function() {
    manageSpoiler();
    highlightLink();
    expandImage();
    showFirstVisitModal()
  });
})();
