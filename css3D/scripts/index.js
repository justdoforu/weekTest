var container = document.getElementById("container");
var box = document.getElementById('box');
var arr = box.getElementsByTagName('div');
var radius = calculateRadius(129, 20);
var audio = document.getElementById("audio");
var winH = document.documentElement.clientHeight;

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

var perspect = 270;
var see = -100;
var flag = true;
var startX = 0;
var x = 0;
var endX = 0;

container.style.perspective = perspect + 'px';
box2.style.transform = 'translate3d(0px,0px, ' + perspect + 'px)';
box1.style.transform = 'translate3d(0px,' + winH / 8 + 'px, ' + see + 'px)';
$('#container').on('touchstart', function (event) {
    event.preventDefault();
    //console.log(event);
    var touch = event.targetTouches[0];
    startX = touch.pageX - x;
    tempsize=-30;
    box1.style.transform = ' translate3d(0px,' + winH / 8 + 'px, ' + (see + tempsize) + 'px)';
})
$('#container').on('touchmove', function (event) {
    if (flag) {
        event.preventDefault();
        var touch = event.targetTouches[0];
        endX = touch.pageX;
        x = endX - startX;
        box.style.transform = 'rotateY(' + x + 'deg)';
        window.setTimeout(function(){
            item.style.transform='translate3d(0px,0px, ' + (0 - tempsize /2) + 'px)rotateY(' + x + 'deg)';
        },20)
    } else {
        return false;
    }
})
$('#container').on('touchend', function (event) {
    // console.log('over');
    event.preventDefault();
    (function f() {
        tempsize += 1;
        box1.style.transform = ' translate3d(0px,' + winH / 8 + 'px, ' + (see + tempsize) + 'px)';

        if (tempsize < 0) {
            window.requestAnimationFrame(f);
            /* requestAnimationFrame()方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘
            之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在
            浏览器重绘之前调用。*/
        }
    })();
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

var k = document.getElementsByClassName('k');
for (var i = 0; i < k.length; i++) {
    k[i].style.background = 'url(images/k' + (i + 1) + '.png) no-repeat';
    k[i].style.WebkitTransform = "translateY(-110px) rotateY(" + -(18 * i + 165) + 'deg) translateY(480px) translatez(' + -(radius - 5) + 'px)';
    k[i].style.height = '547px';
}
var o = document.getElementsByClassName('o');
for (var i = 0; i < o.length; i++) {
    o[i].style.background = 'url(images/o' + (i + 1) + '.png) no-repeat';

    o[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 185) + 'deg) translateY(280px) translatez(' + -(radius - 5) + 'px)';
    o[i].style.height = '196px';
}

var q = document.getElementsByClassName('q');
for (var i = 0; i < q.length; i++) {
    q[i].style.background = 'url(images/q' + (i + 1) + '.png) no-repeat';
    q[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 160) + 'deg) translateY(190px) translatez(' + -(radius - 5) + 'px)';
    q[i].style.height = '154px';
}

var u = document.getElementsByClassName('u');
for (var i = 0; i < u.length; i++) {
    u[i].style.background = 'url(images/u' + (i + 1) + '.png) no-repeat';

    u[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 40) + 'deg) translateY(480px) translatez(' + -(radius - 5) + 'px)';
    u[i].style.height = '779px';
}

var s = document.getElementsByClassName('s');
for (var i = 0; i < s.length; i++) {
    s[i].style.background = 'url(images/s' + (i + 1) + '.png) no-repeat';

    s[i].style.WebkitTransform = "translateY(-110px) rotateY(" + -(18 * i + 40) + 'deg) translateY(450px) translatez(' + -(radius - 5) + 'px)';
    s[i].style.height = '107px';
}

var e = document.getElementsByClassName('e');
for (var i = 0; i < e.length; i++) {
    e[i].style.background = 'url(images/e' + (i + 1) + '.png) no-repeat';

    e[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 100) + 'deg) translateY(770px) translatez(' + -(radius - 7) + 'px)';
    e[i].style.height = '350px';
}

var c = document.getElementsByClassName('c');
for (var i = 0; i < c.length; i++) {
    c[i].style.background = 'url(images/c' + (i + 1) + '.png) no-repeat';

    c[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 75) + 'deg) translateY(20px) translatez(' + -(radius - 7) + 'px)';
    c[i].style.height = '128px';
}

var b = document.getElementsByClassName('b');
for (var i = 0; i < b.length; i++) {
    b[i].style.background = 'url(images/b' + (i + 1) + '.png) no-repeat';

    b[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 80) + 'deg) translateY(130px) translatez(' + -(radius - 7) + 'px)';
    b[i].style.height = '220px';
}

var l = document.getElementsByClassName('l');
for (var i = 0; i < l.length; i++) {
    l[i].style.background = 'url(images/l' + (i + 1) + '.png) no-repeat';

    l[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 210) + 'deg) translateY(150px) translatez(' + -(radius - 7) + 'px)';
    l[i].style.height = '183px';
}

var r = document.getElementsByClassName('r');
for (var i = 0; i < r.length; i++) {
    r[i].style.background = 'url(images/r' + (i + 1) + '.png) no-repeat';

    r[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 185) + 'deg) translateY(55px) translatez(' + -(radius - 5) + 'px)';
    r[i].style.height = '188px';
}

var t = document.getElementsByClassName('t');
for (var i = 0; i < t.length; i++) {
    t[i].style.background = 'url(images/t' + (i + 1) + '.png) no-repeat';

    t[i].style.WebkitTransform = "translateY(-110px) rotateY(" + -(18 * i + 203) + 'deg) translateY(115px) translatez(' + -(radius - 7) + 'px)';
    t[i].style.height = '99px';
}

var m = document.getElementsByClassName('m');
for (var i = 0; i < m.length; i++) {
    m[i].style.background = 'url(images/m' + (i + 1) + '.png) no-repeat';

    m[i].style.WebkitTransform = "translateY(-110px) rotateY(" + -(18 * i + 276) + 'deg) translateY(336px) translatez(' + -(radius - 5) + 'px)';
    m[i].style.height = '179px';
}

var h = document.getElementsByClassName('h');
for (var i = 0; i < h.length; i++) {
    h[i].style.background = 'url(images/h' + (i + 1) + '.png) no-repeat';

    h[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 273) + 'deg) translateY(648px) translatez(' + -(radius - 5) + 'px)';
    h[i].style.height = '410px';
}

var i = document.getElementsByClassName('i');
for (var n = 0; n < i.length; n++) {
    i[n].style.background = 'url(images/i' + (n + 1) + '.png) no-repeat';

    i[n].style.WebkitTransform = "translateY(-110px) rotateY(" + -(18 * n + 330) + 'deg) translateY(750px) translatez(' + -(radius - 5) + 'px)';
    i[n].style.height = '265px';
}

var f = document.getElementsByClassName('f');
for (var i = 0; i < f.length; i++) {
    f[i].style.background = 'url(images/f' + (i + 1) + '.png) no-repeat';

    f[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 345) + 'deg) translateY(25px) translatez(' + -(radius - 5) + 'px)';
    f[i].style.height = '268px';
}

var j = document.getElementsByClassName('j');
for (var i = 0; i < j.length; i++) {
    j[i].style.background = 'url(images/j' + (i + 1) + '.png) no-repeat';

    j[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 365) + 'deg) translateY(390px) translatez(' + -(radius - 5) + 'px)';
    j[i].style.height = '238px';
}

var g = document.getElementsByClassName('g');
for (var i = 0; i < g.length; i++) {
    g[i].style.background = 'url(images/g' + (i + 1) + '.png) no-repeat';

    g[i].style.WebkitTransform = "translateY(-110px)  rotateY(" + -(18 * i + 310) + 'deg) translateY(810px) translatez(' + -(radius - 5) + 'px)';
    g[i].style.height = '151px';
}