var count = 1;
var vid = document.getElementById("vid");

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');

btn1.addEventListener('click', function() {
    vid.src = './Videos/Vid1.mp4';
    console.log('btn1')
    vid.load();
});

btn2.addEventListener('click', function() {
    vid.src = './Videos/Vid2.mp4';
    console.log('btn2')
    vid.load();
});

btn3.addEventListener('click', function() {
    vid.src = './Videos/Vid3.mp4';
    console.log('btn3')
    vid.load();
});

btn4.addEventListener('click', function() {
    vid.src = './Videos/Vid4.mp4';
    console.log('btn4')
    vid.load();
});

btn5.addEventListener('click', function() {
    vid.src = './Videos/Vid5.mp4';
    console.log('btn5')
    vid.load();
});

btn6.addEventListener('click', function() {
    vid.src = './Videos/Vid6.mp4';
    console.log('btn6')
    vid.load();
});

//Once the video ends switch 
vid.addEventListener('ended',function(){
    console.log('hello we are swithcing video')
    vid.src = './Videos/Vid5.mp4';
    vid.loop = true;
    vid.load();
});


vid.load();