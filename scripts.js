$(function(){
	$('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		$(this).addClass('selected');
		$(this).find('input[type="radio"]').prop("checked", true);

	});
});

$(function() {
	$('#closing').on("click", function () {
	    $(this).parent().hide();
	    $(this).parent().parent().find('#' + $(this).parent().attr('class')).show();
	});
});

function slide_div(toHide, toAppear) {

}
