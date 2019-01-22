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
    let parent = $(this).parent().parent().find('#game');
    $(parent).show();
    $(parent).find('#progress').show();
    $(parent).find('#memory').show();
    $(parent).find('#remember').hide();
    $('.progress-bar-fill').css('width', '0%')
    $(parent).delay(5000).queue(function () {
      $(this).find('#memory').hide();
      $(this).find('#remember').show();
    });
  });
});
