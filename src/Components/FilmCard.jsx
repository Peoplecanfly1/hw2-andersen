import React from "react";
import { Link } from "react-router-dom";
const FilmCard = ({ film, match }) => {
  return (
    <div className="card m-2" style={{ width: "23%" }}>
      <img src={film.Poster} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{film.Title}</h5>
        <p className="card-text">{film.Year}</p>
        <p className="card-text">{film.Type}</p>
        <Link to={`${match.url}/${film.imdbID}`}>
          <button className="btn btn-success"> See details</button>
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
