var results = "";
var guesses = "";

// Highlights selected item type (images, numbers or words)
var objectType = "words";
var noOfLevels = 5;
var showTime = 5;
var iteration = 0;

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
    $("#game").show();
    $("#progress").show();
    $("#memory").show();
    $("#remember").hide();
    let current_string = random_string();
    add_variable_cards($("#images"), current_string);
    $('.progress-bar-fill').css({"width": "0%", "transition": "width " + showTime + "s ease-in-out"});
    setTimeout(function () {
      show_remember_after_timeout();
    }, showTime * 1000);
  });
});

$(function () {
  $('#next-memory').on("click", function () {
    $(".guessing").remove();
    $('#guess').attr("readonly", false);
    let parent = $(this).parent().parent();
    if (iteration < noOfLevels) {
      iteration++;
      $(parent).find('#memory').show();
      $(parent).find('#remember').hide();
      $('#next-guess').show();
      $('#next-memory').hide();
      $('.memoryCards').remove();
      let current_string = random_string();
      add_variable_cards($('#images'), current_string);
      $(".progress-bar-fill").css({"width": "100%", "transition": "none"});
      $('.progress-bar-fill').css({"width": "0%", "transition": "width " + showTime + "s ease-in-out"});
      setTimeout(function () {
        show_remember_after_timeout(parent);
      }, showTime * 1000);
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
      $('#guess').attr("readonly", true);
      guess_amount = 0;
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

function show_remember_after_timeout() {
  $('#memory').hide();
  $('#remember').show();
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

// Show selected screen #
function show(stage) {
  $("#" + stage).addClass("complete");
  noOfLevels = parseInt(stage[stage.length - 1], 10) - 1;
}

// Hide all possible selections except the one selected
function hideExcept(stage) {
  var screens = ["stage1", "stage2", "stage3", "stage4", "stage5", "stage6"];

  screens = jQuery.grep(screens, function (value) {
    return value != stage;
  });

  for (var i = 0; i < screens.length; i++) {
    $("#" + screens[i]).removeClass("complete");
  }
}

$(function () {

  $('#stage1, #stage2, #stage3, #stage4, #stage5, #stage6').click(function () {
    hideExcept(this.id);
    show(this.id);
  });

})
