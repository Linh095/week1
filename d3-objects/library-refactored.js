const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylistInfo: function(playlistID){
       const playlist = this.playlists[playlistID];
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              },

  printTrackInfo: function(trackID){
       const track = this.tracks[trackID];
       console.log(`${trackID}: ${track.name} by ${track.artist} (${track.album})`);
              },

  printPlaylists: function() {
       for (const playlist in this.playlists) {
              this.printPlaylistInfo(playlist);
       }
              },

  printTracks: function() {
       for (const track in this.tracks) {
              this.printTrackInfo(track);
       }
              },

  printPlaylist: function(playlistId) {
       this.printPlaylistInfo(playlistId);
       const playlistTracks = this.playlists[playlistId].tracks;
       for (const track of playlistTracks) {
              this.printTrackInfo(track);
       }
              },

  addTrackToPlaylist: function(trackId, playlistId) {
       this.playlists[playlistId].tracks.push(trackId);
              },

  generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              },

  addTrack: function(name, artist, album) {
       const track = {id: this.generateUid(), name: name, artist: artist, album: album};
       this.tracks[track.id] = track;
              },

  addPlaylist: function(name) {
       this.playlists[name] = {id: this.generateUid(), name: name, tracks:[]}},

  printSearchResults: function(query) {
       for (const track in this.tracks) {
              const id = this.tracks[track].id.toLowerCase();
              const name = this.tracks[track].name.toLowerCase();
              const artist = this.tracks[track].artist.toLowerCase();
              const album = this.tracks[track].album.toLowerCase();

              if(id.includes(query) || name.includes(query) || artist.includes(query) || album.includes(query)) {
                     this.printTrackInfo(track);
              }
       }
              }
};

library.addTrack('linh is trying really hard', 'linh', 'LHL bootcamp');
library.printTracks();