var objectType = "words"
var noOfLevels = 5
var showTime = 5

$(function () {
  $('#words-chip').on("click", function () {
    $('#words-chip').css("background-color", "#e66767")
    $('#numbers-chip').css("background-color", "#ea8685")
    objectType = "words"
  })
})

$(function () {
  $('#numbers-chip').on("click", function () {
    $('#numbers-chip').css("background-color", "#e66767")
    $('#words-chip').css("background-color", "#ea8685")
    objectType = "numbers"
  })
})

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
        showTime = $("#time-input").val();
        console.log(showTime);
        $(this).parent().parent().hide();
        let parent = $(this).parent().parent().find('#game');
        $(parent).show();
        $(parent).find('#progress').show();
        $(parent).find('#memory').show();
        $(parent).find('#remember').hide();
        alert("is this done?")
        $('.progress-bar-fill').css('width', '100%')
    });
});
