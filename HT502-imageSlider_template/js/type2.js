$(document).ready(function() {
    //레이어 숨기기
    $("#slider ul li").eq(1).hide();
    $("#slider ul li").eq(2).hide();

    // $("#slider ul li:nth-child(2)").hide();
    // $("#slider ul li:nth-child(3)").hide();

    setInterval(function() {
       $("#slider ul li:first-of-type").fadeOut();
       $("#slider ul li:nth-child(2)").fadeIn();
       //html의 li 순서를 바꾸어서 위명령문들 반복 수행.
       $("#slider ul").append($("#slider ul li:first-of-type"));
    }, 2000);


});