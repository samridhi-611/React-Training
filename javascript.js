document.addEventListener("click", function (e) {
  const songBar = e.target.closest(".SongBarStruct");
  if (!songBar) return;

  const songName = songBar.querySelector(".SongName").innerText;
  localStorage.setItem("currentSong", songName);
  window.location.href = "playing.html";
});



const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();
    const songs = document.querySelectorAll(".SongBarStruct");

    songs.forEach(song => {
      const songName = song.querySelector(".SongName").innerText.toLowerCase();

      if (songName.includes(searchValue)) {
        song.style.display = "flex";
      } else {
        song.style.display = "none";
      }
    });
  });
}


const playlistContainer = document.querySelector(".SongsList");

if (playlistContainer && window.location.pathname.includes("playlist")) {
  const playlist = JSON.parse(localStorage.getItem("playlist")) || [];
  playlistContainer.innerHTML = "";

  playlist.forEach(song => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="SongBarStruct">
        <p class="SongName">${song}</p>
        <img src="images/music-logo-design.jpg" id="songlogo" />
      </div>
    `;
    playlistContainer.appendChild(li);
  });
}
