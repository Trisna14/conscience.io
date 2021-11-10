const btn_youtubeShow = document.getElementsByClassName('video-youtube-vnjs')[0];
const youtube_show = document.getElementsByClassName('video-youtube-show')[0];
const youtube_i = document.getElementsByClassName('youtube-i')[0];
// console.log(btn_youtubeShow);

function youTubeShow () {
    // console.log('ok');
    youtube_show.classList.add('showY');
    youtube_i.classList.add('showY');
    console.log(youtube_show);
}

function youTubeOut () {
    // console.log('ok');
    youtube_show.classList.remove('showY');
    youtube_i.classList.remove('showY');
    console.log(youtube_show);
}