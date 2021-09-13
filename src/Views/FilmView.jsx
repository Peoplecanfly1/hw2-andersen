import React, { useEffect, useState } from "react";
import ApiFetch from "../Fetch/ApiFetch";

const FilmView = ({ match }) => {
  const filmId = `i=${match.params.filmId}`;
  const [film, setFilm] = useState();

  useEffect(() => {
    const getPromise = async () => {
      const response = await ApiFetch(filmId);
      const result = await response.json();
      setFilm(result);
    };

    getPromise();
  }, [filmId]);

  const checkResponseStatus = () => {
    if (!film) {
      return <h1> Loading</h1>;
    }
    if (film.Response === "True") {
      return (
        <div className="container d-flex justify-content-center">
          <div className="card m-2" style={{ width: "40%" }}>
            <img src={film.Poster} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{film.Title}</h5>
              <p className="card-text">{film.Year}</p>
              <p className="card-text">{film.Plot}</p>
              <div className="card-header">
                Rating: <strong>{film.imdbRating}</strong>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (film.Response === "False") {
      return <h1> Server error. Please check correctness of ID</h1>;
    }
  };

  return checkResponseStatus();
};

export default FilmView;
