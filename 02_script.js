$(function() {
    $('.bars').click(function() {
        $('.s-sub-menu').hide();

        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('.smart').slideUp(200);
        }else{
            $(this).addClass('open');
            $('.smart').slideDown(200);
        }
    });

    $('.s-m').click(function() {
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).next().hide(200);
        }else{
            $(this).addClass('open');
            $(this).next().show(200);
        }
    });
});
