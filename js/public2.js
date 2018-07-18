$(function(){
    $('#myContainer').fullpage({
        resize:false,
        controlArrows:false,
        anchors: ['index', 'invest','invest1','invest2','invest3','invest4',
            'company','company1','company2','company3','company4','company5',
            'team','team1','team2','team3','team4','team5','team6','team7','team8','team9',
            'contact','contact1'],
        menu: '#menu-p'
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
function moveLeft(section,slide) {
    $.fn.fullpage.moveTo(section, slide);
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