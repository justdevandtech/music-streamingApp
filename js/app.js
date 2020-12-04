/*const trend_songs = [
    {
        id: 1,
        song_title: "Animashaun",
        artist: "Davido feat-Yonda",
        song_item: "./musics/Davido-Animashaun-feat-Yonda.mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 2,
        song_title: "Assurance",
        artist: "Davido",
        song_item: "./musics/Davido-Assurance-(JustNaija.com).mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 3,
        song_title: "Big-Picture",
        artist: "Davido feat-Gunna-Dremo",
        song_item: "./musics/Davido-Big-Picture-feat-Gunna-Dremo-A-Boogie-wit-Da-Hoodie-(JustNaija.com).mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 4,
        song_title: "Animashaun",
        artist: "Davido feat-Yonda",
        song_item: "./musics/Davido-Animashaun-feat-Yonda.mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 5,
        song_title: "Animashaun",
        artist: "Davido feat-Yonda",
        song_item: "./musics/Davido-Animashaun-feat-Yonda.mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 6,
        song_title: "Animashaun",
        artist: "Davido feat-Yonda",
        song_item: "./musics/Davido-Animashaun-feat-Yonda.mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 7,
        song_title: "Animashaun",
        artist: "Davido feat-Yonda",
        song_item: "./musics/Davido-Animashaun-feat-Yonda.mp3",
        img: "./img/davido.jpeg",
    },
    {
        id: 8,
        song_title: "Animashaun",
        artist: "Davido feat-Yonda",
        song_item: "./musics/Davido-Animashaun-feat-Yonda.mp3",
        img: "./img/davido.jpeg",
    },
   
]

const title = document.getElementById("title");
const artistName = document.getElementById("artistName");
const song_img = document.getElementById("song_img");
const song_file = document.getElementById("song_file");

const musicContainer = document.querySelector(".music-container");

window.addEventListener("DOMContentLoaded", function () {
    songs_content(trend_songs);
});



function songs_content(songItems) {
    let songDisplay = songItems.map(function (items) {
        
        return ` <div class="musics">
        <img src=${items.img} alt="">
        <div class="song-descript">
          <h3>${items.song_title}</h3>
          <p>${items.artist}</p>
          <button id="play"><i class="fas fa-play"></i></button>
          <button id="pause"><i class="fas fa-pause"></i></button>
        </div>
        <audio src= ${items.song_item}>${items.song_item}</audio>
      </div>
  `
    });
   songDisplay = songDisplay.join("");
    musicContainer.innerHTML = songDisplay
    //console.log(songDisplay)
}*/


const musicitem = document.querySelectorAll(".musics");

const genres = document.querySelectorAll(".genre");


/*genre.forEach(function (gen) {

    gen.addEventListener("click", function () {
        alert('This function is not available at this moment')
    });
});*/

//musics playing and pausing functionalities
var playbtn = document.querySelectorAll("#play");
musicitem.forEach(function (song) {
     playbtn = song.querySelector("#play");
    const audio = song.querySelector("audio");

   
    //play btn function
   playbtn.addEventListener("click", function () {
    playbtn.textContent = "playing";
   audio.play();
   playbtn.textContent = "playing";
  

musicitem.forEach(function (item) {

    const audio = item.querySelector("audio");
     playbtn = item.querySelector("#play");

   if (item !== song) {
       audio.pause();
       playbtn.textContent = "play";
   } 
   else {
       audio.play();
       
   }
});

   });
   // play btn function end here

  const pausebtn = song.querySelector("#pause");
  pausebtn.addEventListener("click", function () {
   audio.pause();
   playbtn.textContent = "play";
  });
});
//musics playing and pausing functionalities end here

/***search bar */
const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("click", ()=>{
    alert("This feature isn't working at the moment!")
});

/****genre */
for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    genre.addEventListener('click', ()=>{
        alert("This feature isn't working at the moment!")
    });  
    
}


