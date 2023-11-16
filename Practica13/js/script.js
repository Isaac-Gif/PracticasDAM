const songs = [
    {title: 'Un Preview', artist: 'Bad Bunny', src: 'music/UNPREVIEW.mp3', cover: 'img/preview.jpg'},
    {title: 'La Santa', artist: 'Bad Bunny x Daddy Yankee', src: 'music/LASANTA.mp3', cover: 'img/Lasanta.jpg'},
    {title: 'Fantasma|AVC', artist: 'Jhayco - Tainy', src: 'music/FANTASMA.mp3', cover: 'img/Data.jpg'},
    {title: 'Todavía', artist: 'Wisin & Yandel - Tainy', src: 'music/TODAVÍA.mp3', cover: 'img/Data.jpg'},
    {title: 'Adicto', artist: 'Ozuna - Anuel AA - Tainy', src: 'music/Adicto.mp3', cover: 'img/Adicto.png'}
];

let currenSongIndex = 0;

let isPlaying = false;

let audio;

function playCurrentSong(){
    if(audio){
        audio.stop();
    }

    audio = new Howl({
        src: [songs[currenSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function(){
            playNextSong();
        }
    }) ;
    updateSongInfo();
}


const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.querySelector('.card-img-top');

playButton.addEventListener('click', () => {
    isPlaying = true;
    playCurrentSong();
});

pauseButton.addEventListener('click', () => {
    isPlaying = false;
    audio.pause();
});

nextButton.addEventListener('click', () => {
    playNextSong();
});

prevButton.addEventListener('click', () => {
    if(audio.seek() > 5){
        audio.seek(0);
    }else {
        currenSongIndex = (currenSongIndex -1 + songs.length) % songs.length;
        playCurrentSong();
    }
});

volumeSlider.addEventListener('input', () =>{
    audio.volume(volumeSlider.value);
});

function updateSongInfo(){
    songTitle.textContent = songs[currenSongIndex].title;
    songArtist.textContent = songs[currenSongIndex].artist;
    albumCover.src = songs[currenSongIndex].cover;
}

function playNextSong(){
    currenSongIndex = (currenSongIndex + 1) % songs.length;
    playCurrentSong();
}

playCurrentSong();