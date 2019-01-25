var iteration = 0;
var results = "";
var guesses = "";

// Highlights selected item type (images, numbers or words)
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
    $(this).parent().hide();
    var parent = $('#game');
    $(parent).show();
    $(parent).find('#progress').show();
    $(parent).find('#memory').show();
    $(parent).find('#remember').hide();
    let current_string = random_string();
    add_variable_cards($('#images'), current_string);
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
      $('#next-guess').show();
      $('#next-memory').hide();
      $('.memoryCards').remove();
      let current_string = random_string();
      add_variable_cards($('#images'), current_string);
      $(".progress-bar-fill").css({"width": "100%", "transition": "none"});
      $('.progress-bar-fill').css({"width": "0%", "transition": "width 5s ease-in-out"});
      setTimeout(function () {
        show_remember_after_timeout(parent);
      }, 5000);
    } else {
      $(parent).hide();
      $(parent).parent().find('#result').show();
    }
  });
});

$(function () {
  var guess_amount = 0;
  $('.guessing').remove();
  $('#guess').val("");
  $('#next-guess').on("click", function () {
    guess_amount++;
    if (guess_amount == (iteration + 1) * 2) {
      guesses += ",";
      results += ",";
      $(this).hide();
      $('#next-memory').show();
    }
    var guess = $('#guess').val();
    guesses += guess;
    $('#answers').append('<div class="guessing"> ' + guess + '</div>');
    $('#guess').val("");
  });
});

function show_remember_after_timeout(parent) {
  $(parent).find('#memory').hide();
  $(parent).find('#remember').show();
}

function add_variable_cards(div, str) {
  for (let i = 0; i < (iteration + 1) * 2; i++) {
    $(div).append(' <div class="memoryCards"> ' + str.charAt(i) + ' </div>')
    results += str.charAt(i);
  }
}

function random_string() {
  return (Math.random() + 1).toString(36).substring(2, 14)
}
