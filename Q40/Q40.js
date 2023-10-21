"use strict";
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating album objects
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // With tracks
const album3 = make_album("Artist3", "Album3", 8); // With tracks
// Printing album objects
console.log(album1);
console.log(album2);
console.log(album3);
