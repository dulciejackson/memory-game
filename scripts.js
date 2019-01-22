var iteration = 0;

// Highlights selected item type (images, numbers or words)
$(function () {
  $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function () {
    $(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
    $(this).addClass('selected');
    $(this).find('input[type="radio"]').prop("checked", true);

  });
});

// Return to landing page when home button clicked
$(function () {
  $('#home-nav').on("click", function () {
    $("#landing-page").show();
    $("#game").hide();
    $("#memory").hide();
    $("#result").hide();
  })
})

// Goes from the landing page to the first memory game
$(function () {
  $('#landing-page-btn').on("click", function () {
    $(this).parent().hide();
    var parent = $(this).parent().parent().find('#game');
    $(parent).show();
    $(parent).find('#progress').show();
    $(parent).find('#memory').show();
    $(parent).find('#remember').hide();
    $('.progress-bar-fill').css('width', '0%');
    setTimeout(function () {
      show_remember_after_timeout(parent);
    }, 5000);
  });
});

$(function () {
  $('#next-memory').on("click", function () {
    let parent = $(this).parent().parent();
    if (iteration < 3) {
      iteration++;
      $(parent).find('#memory').show();
      $(parent).find('#remember').hide();
      $(".progress-bar-fill").css({"width":"100%","transition":"none"});
      $('.progress-bar-fill').css({"width": "0%", "transition": "width 5s ease-in-out"});
      //$('.progress-bar-fill').css('width', '0%')
      setTimeout(function () {
        show_remember_after_timeout(parent);
      }, 5000);
    } else {
      $(parent).hide();
      $(parent).parent().find('#result').show();
    }
  });
});

function show_remember_after_timeout(parent) {
  $(parent).find('#memory').hide();
  $(parent).find('#remember').show();
}