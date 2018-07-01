$(function(){
    $('#fullpage').fullpage({
        resize:false,
        controlArrows:false
    });
    isPaging();
    $(window).resize(function(){
        isPaging();
        $(".article").parents(".skew-left").find(".article-p").css({ "top":0+'px' });
    });
    $('.detail-next-page-arrow').click(function () {
        var postion=$(this).parents(".skew-left").find(".article-p").position();
        $(this).parents(".skew-left").find(".article-p").css({ "top":postion.top-275+'px' });
        if(Math.abs(postion.top-275-275)>=$(this).parents(".skew-left").find(".article").height()){
            $(this).parents(".skew-left").find(".detail-next-page").hide();
        }
        console.log(postion);
    });
});
function moveLeft(slide) {
    $.fn.fullpage.moveTo(1, slide);
}
function isPaging() {
    $(".article").map(function(index,elem) {
        if($(elem).height()>275){
            $(elem).parents(".skew-left").find(".detail-next-page").show();
            var n=Math.ceil($(elem).height()/275);
            $(elem).parents(".skew-left").find(".article-p").height(n*275);
        }
        else {
            $(elem).parents(".skew-left").find(".detail-next-page").hide()
        }
    })
}