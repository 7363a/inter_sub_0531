/* 분야별 추천 - nav */

$(function(){
    var i=0;
    $("#field_nav > li").mouseenter(function(){
        i = ($(this).index()+1)
        $(".field_wrap > div").hide()


        $("#field_nav > li").css({
            "border-bottom":"none",
            "color":"#000   "
        })

        $("#field_nav > li:hover").css({
            "border-bottom":"2px solid #e66a57",
            "color":"#e66a57"
        })


        $(".field_wrap > div:nth-of-type"+"("+i+")").stop().fadeIn("fast")
    })
});