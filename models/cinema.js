const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getfilmByTitle = function() {
  const filmTitle = this.films.map( film => film.title )
  return filmTitle;
}

Cinema.prototype.findFilmByTitle = function () {
  const filmTitle = this.films.find(film => film.title == "Moonlight");
  return filmTitle;
}

Cinema.prototype.filterFilmByGenre = function () {
  const filmGenre = this.films.filter(film => film.genre === "action");
  return filmGenre;
}

Cinema.prototype.filterFilmByYear = function () {
  const filmYear = this.films.filter(film => film.year === 2018);
  return filmYear
}

Cinema.prototype.noFilms = function () {
  const filmYear = this.films.filter(film => film.year === 2000);
  return filmYear
}

Cinema.prototype.filmGreaterThan = function () {
  const filmGreaterThan = this.films.filter(film => film.length > 150);
  return filmGreaterThan
}

Cinema.prototype.filmsTotalLength = function () {
  const filmsTotalLength = this.films.reduce(film => film.length += film.length);
  return filmsTotalLength
}

module.exports = Cinema;
