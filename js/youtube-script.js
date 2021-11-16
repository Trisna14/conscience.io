const btn_youtubeShow = document.getElementsByClassName('video-youtube-vnjs');
const youtube_show = document.getElementsByClassName('video-youtube-show');
const youtube_i = document.getElementsByClassName('youtube-i');
// console.log(btn_youtubeShow);

// console.log(youtube_show.classList.add('data'))
// function youTubeShow () {
//     // console.log('ok');
//     youtube_show.classList.add('showY');
//     youtube_i.classList.add('showY');
//     console.log(youtube_show);
// }

// function youTubeOut () {
//     // console.log('ok');
//     youtube_show.classList.remove('showY');
//     youtube_i.classList.remove('showY');
//     console.log(youtube_show);
// }

// console.log(btn_youtubeShow);

for (i = 0;i < btn_youtubeShow.length;i++) {
    
    // console.log(btn_youtubeShow[i]);

    btn_youtubeShow[i].addEventListener('mouseover', (btn) => {
        
        const nama_img = btn.target.name;
        // console.log(nama_img);
        const data_name = document.getElementsByName(nama_img)[0];
        data_name.classList.add(nama_img);
        // console.log(data_name.classList.add(nama_img));
        // console.log(btn.target);

        const y_show = document.getElementsByClassName(nama_img)[0].parentNode;
        // console.log(y_show.lastElementChild.classList.toggle('showY'));
        y_show.lastElementChild.classList.toggle('showY');

        

        // console.log(i)
        // console.log(btn_youtubeShow[i]);
    })

    // btn_youtubeShow[i].addEventListener ('click', (btn) => {

    //     console.log(btn.target.classList.add('data'))
    //     console.log(btn.target);
    // });

    
}

for (i = 0;i < youtube_i.length; i++) {

    console.log(youtube_i[i]);

    youtube_i[i].addEventListener ('click', (btn) => {

        console.log(btn.target.classList);
        console.log(btn.target)
    });

}

// btn_youtubeShow.addEventListener('mouseover', () => {

//     console.log('ok');
// })