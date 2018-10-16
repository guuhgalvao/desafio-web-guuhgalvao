var $ = jQuery.noConflict();
function showLoader(callback = false){
    $('#loader').addClass('fadeIn').css('display', '').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('fadeIn');
        if(callback){
            callback();
        }
    });
}

function hideLoader(callback = false){
    $('#loader').addClass('fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
        $(this).removeClass('fadeOut').css('display', 'none');
        if(callback){
            callback();
        }
    });
}