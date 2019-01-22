// Highlights selected item type (images, numbers or words)
$(function () {
    $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function () {
        $(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('input[type="radio"]').prop("checked", true);

    });
});

$("#ex25").slider({
	value: [1, 100],
	ticks: [1, 50, 100],
	lock_to_ticks: true
});

// Goes from the landing page to the first memory game
$(function () {
    $('#landing-page-btn').on("click", function () {
        $(this).parent().hide();
        let parent = $(this).parent().parent().find('#game');
        $(parent).show();
        $(parent).find('#progress').show();
        $(parent).find('#memory').show();
        $(parent).find('#remember').hide();
        alert("is this done?");
        $('.progress-bar-fill').css('width', '100%')
    });
});
