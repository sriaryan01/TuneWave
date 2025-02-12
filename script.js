console.log("Welcome to TuneWave");

// Initialize The Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("MyProgressBar");
let Gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songItemPlay = document.getElementsByClassName("songItemPlay");
const volumeSlider = document.getElementById("volumeSlider");

let songs =[
    {songName : "Tareefan - Harnoor",filepath :"songs/1.mp3", coverPath :"cover/tareefan.jpeg"},
    {songName : "Mann Mera - Juss",filepath :"songs/2.mp3", coverPath :"cover/mera.jpg"},
    {songName : "Main Aa Reha - Juss",filepath :"songs/3.mp3", coverPath :"cover/main.jpg"},
    {songName : "Tu Jo Mileya - Juss",filepath :"songs/4.mp3", coverPath :"cover/tujomileya.jpg"},
    {songName : "Talks - Juss",filepath :"songs/5.mp3", coverPath :"cover/talks.jpeg"},
    {songName : "Suniyan Suniyan - Juss",filepath :"songs/6.mp3", coverPath :"cover/suniyan.jpg"},
    {songName : "Baarishein - Anuv Jain",filepath :"songs/7.mp3", coverPath :"cover/baarishein.jpeg"},
    {songName : "Chal Diye Tum Kahan - Usman Ali",filepath :"songs/8.mp3", coverPath :"cover/chal.jpeg"},
    {songName : "Ishq - Lost And Found",filepath :"songs/9.mp3", coverPath :"cover/ishq.jpeg"},
    {songName : "Parshawan - Harnoor",filepath :"songs/10.mp3", coverPath :"cover/Parshawan.jpg"},
    {songName : "Waalian - Harnoor",filepath :"songs/11.mp3", coverPath :"cover/waalian.jpeg"},
    
]
songItems.forEach((element , i)=>{
    // console.log(element , i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// console.table(songs);

// audioElement.play();
// handle play pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
                // console.log("hiiii");
                audioElement.play();
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                Gif.style.opacity =1;
    }
    else
    {
                audioElement.pause();
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
                Gif.style.opacity =0;
            }
})
// listen to events 
audioElement.addEventListener('timeupdate' , ()=>{
    // console.log("time update");
    // update seeekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>
{
audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;  
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play'); 
    element.classList.remove('fa-circle-pause');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause'); 
        // console.log(index);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Gif.style.opacity =1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })


})
document.getElementById('next').addEventListener('click', ()=>{
    
        if (songIndex>=6){
            songIndex=0;
        }
        else{
            songIndex += 1;
        }
    
        // console.log(songIndex+"----"+songs
        
            audioElement.src = `songs/${songIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            Gif.style.opacity =1;
            masterSongName.innerText = songs[songIndex].songName;
            // Change the master play icon
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');

    })
        
    document.getElementById('prev').addEventListener('click', ()=>{
            if (songIndex<=0){
                songIndex=0;
            }
            else{
                songIndex -= 1;
            }
            
                audioElement.src = `songs/${songIndex+1}.mp3`;
                audioElement.currentTime = 0;
                audioElement.play();
                Gif.style.opacity =1;
                masterSongName.innerText = songs[songIndex].songName;
                // Change the master play icon
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
            
        });

 volumeSlider.addEventListener("change", function() {
    audioElement.volume = volumeSlider.value;
    });




 
    






















