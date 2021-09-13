import React from "react";
import FilmCard from "./FilmCard";
import { useSelector } from "react-redux";

const FilmList = ({ match }) => {
  const { films, loadingStatus } = useSelector((state) => state.films);

  const uniqFilms = [];

  if (films.length > 0) {
    films.reduce((prevFilm, film) => {
      if (film.imdbID !== prevFilm.imdbID) {
        uniqFilms.push(film);
      }
      return film;
    });
  }

  return (
    <div className="bg-light d-flex flex-wrap justify-content-between">
      {loadingStatus === "loading" && <h1>Loading</h1>}
      {loadingStatus === "fail" && <h1>Please enter another film title or/and filters</h1>}
      {uniqFilms.map((film) => (
        <FilmCard film={film} match={match} key={film.imdbID} />
      ))}
    </div>
  );
};

export default FilmList;
