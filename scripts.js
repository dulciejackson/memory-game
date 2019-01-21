$(function () {
    $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function () {
        $(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('input[type="radio"]').prop("checked", true);

    });
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

