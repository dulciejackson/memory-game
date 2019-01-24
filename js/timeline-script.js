var numberOfScreens = 0; // Global var I needed to access for report section

// Show selected screen #
function show(stage){
  $("#"+stage).addClass("complete");
  numberOfScreens = parseInt(stage[stage.length-1], 10);
  console.log(numberOfScreens);
}

// Hide all possible selections except the one selected
function hideExcept(stage){
  var screens = ["stage1", "stage2", "stage3", "stage4", "stage5", "stage6"];
  
  screens = jQuery.grep(screens, function(value){
    return value != stage;
  });

  for(var i=0; i<screens.length; i++){
    $("#"+screens[i]).removeClass("complete");
  }
}

$(function () {
  
  $('#stage1, #stage2, #stage3, #stage4, #stage5, #stage6').click(function () { 
    hideExcept(this.id);
    show(this.id);
  });
  
})