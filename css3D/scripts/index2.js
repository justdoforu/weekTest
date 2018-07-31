var container = document.getElementById("container");
var box = document.getElementById('box');
var arr = box.getElementsByTagName('div');
var radius = calculateRadius(129, 20);
var audio = document.getElementById("audio");

for (var i = 0; i < arr.length; i++) {
    arr[i].style.background = 'url("./img/p' + (i + 1) + '.png") no-repeat';
    arr[i].style.webkitTransform = "rotateY(" + 360 / arr.length * i + 'deg) translatez(' + radius + 'px)';
}

function calculateRadius(length, totalNum) {
    return Math.round(length / (2 * Math.tan(Math.PI / totalNum))) - 3;
}

$("#laba").on("tap", function (e) {
    if (audio.paused) {
        audio.play();
        $('#laba').text("📣");
    } else {
        audio.pause();
        $("#laba").text("⏸");
    }
})
var perspect = 900;
var see = -100;
var flag = true;
var startX = 0;
x = 0;
endX = 0;
// container.style.perspective = perspect + 'px';
// box2.style.transform = 'translate3d(0px,0px, ' + perspect + 'px)';
// box1.style.transform = 'translate3d(0px,' + winH / 8 + 'px, ' + see + 'px)';
$('#box').on('touchstart', function (event) {
    event.preventDefault();
    //console.log(event);
    var touch = event.targetTouches[0];
    startX = touch.pageX - x;
})
$('#box').on('touchmove', function (event) {
    if (flag) {
        event.preventDefault();
        var touch = event.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX;
        box.style.transform = 'rotateY(' + x + 'deg)';
    } else {
        return false;
    }
})
$('#box').on('touchend', function (event) {
})
window.addEventListener('deviceorientation', function (event) {
    var gamma = event.gamma;
    //box.style.transform = 'ratateY(' + gamma * 3 + 'deg)';
    if(Math.abs(gamma>1)){
        flag=false;
        box.style.transform = 'ratateY(' + gamma * 3 + 'deg)';
    }else{
        flag=true;
    }
})