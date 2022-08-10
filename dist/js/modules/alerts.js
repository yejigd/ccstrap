/**
 * --------------------------------------------------------------------------
 * Alerts.js__v1.0__2021.07.05
 * --------------------------------------------------------------------------
 */



function alert(){


    // 얼럿 닫기
    $('[data-cc-dismiss="alert"]').on('click', function(){
        if($(this).parents().hasClass('alert__dismissible')){
            $(this).parents('.alert').fadeOut();
        }
    });
}

$(function (){
    alert();
});