let btn = document.querySelector('button');
let videoBox = document.querySelector('div');
let video = document.querySelector('video');

btn.onclick = function () {
    videoBox.setAttribute('class', 'showing');
}

videoBox.onclick = function () {
    videoBox.setAttribute('class', 'hidden');
};

video.onclick = function (e) {
    e.stopPropagation();
    video.play();
};