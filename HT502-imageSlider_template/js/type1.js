$(document).ready(function() {

    var $items = $("#slider ul .item");
    console.log($items);

    var currentIndex = 0;

    // setTimeout(function(){},1000) 시간지연함수, 1초이후에 function()안을 실행하라
    setInterval(function(){
        if (currentIndex > 2) {
            currentIndex = 0
        }

        $items.removeClass("active");
        console.log($items.eq(currentIndex).hasClass("active"));       
        $items.eq(currentIndex++).addClass("active");
        console.log(currentIndex);
    },2000);

});