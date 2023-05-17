

class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// Array of artists and albums
const artistsAndAlbums = [
    { artist: "Operation Ivy", album: "Energy" },
    { artist: "Blink 182", album: "Dude Ranch" },
    { artist: "New Found Glory", album: "Sticks and Stones" }
  ];

  const albumSelect = document.getElementById("albumSelect");
  const playButton = document.getElementById("playButton");
  const showFavoriteButton = document.getElementById("showFavoriteButton");
  const favoriteAlbumText = document.getElementById("favoriteAlbumText");

  // Populate dropdown menu with artists and albums
  artistsAndAlbums.forEach(({ artist, album }) => {
    const option = document.createElement("option");
    option.value = `${artist}: ${album}`;
    option.textContent = `${artist} - ${album}`;
    albumSelect.appendChild(option);
  });

  playButton.addEventListener("click", () => {
    const selectedAlbum = albumSelect.value;
    if (selectedAlbum) {
      jukebox.playAlbum(selectedAlbum);
    }
  });

  showFavoriteButton.addEventListener("click", () => {
    const favoriteAlbum = jukebox.getFavoriteAlbum();
    favoriteAlbumText.textContent = `Your favorite album is: ${favoriteAlbum}.`;
  });
