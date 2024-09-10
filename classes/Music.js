// import the Media class:
const Media = require("./Media");

// create your Music class:

class Music extends Media {
    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    }

    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }

    static shortestAlbum(albums){
        albums.sort((a1,a2) => a1.length - a2.length);

        return albums[0];
    }
}

// don't change below
module.exports = Music;
