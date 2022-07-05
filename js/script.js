'use sctrict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
      

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const nameOfMovie = prompt('Один из последних посмотренных фильмов?', ''),
      estimation = prompt('На сколько оцените его?', ''),
      a = prompt('Один из последних посмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');



personalMovieDB.movies[nameOfMovie] = estimation;
personalMovieDB.movies[a] = b;


console.log(personalMovieDB);




