function show(stage){
  $(stage).addClass("complete");
}

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
	$('#stage1').on("click", function () {
    console.log(this);
    hideExcept("stage1");
    show("#stage1");
	})
  
  $('#stage2').on("click", function () {
    hideExcept("stage2");
    show("#stage2");
	})
  
  $('#stage3').on("click", function () {
    hideExcept("stage3");
    show("#stage3");
	})
  
  $('#stage4').on("click", function () {
    hideExcept("stage4");
    show("#stage4");
	}) 
  
  $('#stage5').on("click", function () {
    hideExcept("stage5");
    show("#stage5");;
	})
  
  $('#stage6').on("click", function () {
    hideExcept("stage6");
    show("#stage6");
	})
})
