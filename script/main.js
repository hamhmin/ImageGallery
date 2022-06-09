$(function () {

    $('.img-thumb li').click(function () {
        //this : 부모 li 중 사용자가 클릭한 li
        //그 및에 이미지 src값 읽음
        var thisSrc = $(this).find('img').attr('src');
        $('.main-image img').attr('src', thisSrc);
    });
});