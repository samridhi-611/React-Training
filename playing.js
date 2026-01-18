const currentSong = localStorage.getItem("currentSong");

if (currentSong) {
  document.getElementById("nowPlayingSong").innerText = currentSong;
}

const addBtn = document.getElementById("addToPlaylist");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

    if (!playlist.includes(currentSong)) {
      playlist.push(currentSong);
      localStorage.setItem("playlist", JSON.stringify(playlist));
      alert("Added to playlist...!");
    } else {
      alert("Already in playlist...!");
    }
  });
}
