$(document).ready(function(){
    $('.sc-box').hide();
    $('#content1').show();

    $('.skill-li ul li').click(function(){
        $('.skill-li ul li').removeClass('.active')
        $('.sc-box').hide();

        const target= $(this).data('phyron');
        $(target).show();
    })
})
$(document).ready(function(){
    $('#exit').click(function(){
        $('.login-form').hide();
        $('body').css("overflow", "auto"); // Enable scrolling
    });
    $('#btn-login').click(function(){
        $('.login-form').show();
        $('body').css("overflow", "hidden"); // Disable scrolling
    });
});