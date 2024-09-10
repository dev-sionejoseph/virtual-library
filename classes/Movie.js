// import the Media class:
const Media = require("./Media");

// create your Movie class:

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`
    }

    static longestMovie(movies){
        movies.sort((m1,m2) => m2.duration - m1.duration);

        return movies[0];
    }
}

// don't change below
module.exports = Movie;