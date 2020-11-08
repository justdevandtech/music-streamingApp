const musicitem = document.querySelectorAll(".musics");

const genre = document.querySelectorAll(".genre");


genre.forEach(function (gen) {

    gen.addEventListener("click", function () {
        alert('This function is not available at this moment')
    });
});

//musics playing and pausing functionalities
musicitem.forEach(function (song) {
    const playbtn = song.querySelector("#play");
    const audio = song.querySelector("audio");

    const img = song.querySelector("img");

   // img.addEventListener('click', function () {
     //   alert('wow')
   // })
  
    //play btn function
   playbtn.addEventListener("click", function () {

   audio.play();
   playbtn.textContent = "playing";
  

musicitem.forEach(function (item) {

    const audio = item.querySelector("audio");
    const playbtn = item.querySelector("#play");

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
