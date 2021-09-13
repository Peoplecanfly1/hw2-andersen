import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sentCartData } from "../store/store";

const margin = {
  marginLeft: "10px",
};

const SearchBar = () => {
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");


  const dispatch = useDispatch();



  const makeRequestforFilms = () => {
    const query = getQueryString();
    dispatch(sentCartData(query));
  };

  const getQueryString = function () {
    let queryString = "";
    if (title) {
      queryString += `s=${title.trim()}&`;
    }
    if (year) {
      queryString += `y=${year.trim()}&`;
    }
    if (type) {
      queryString += `type=${type.trim()}`;
    }
    return queryString;
  };

  return (
    <form>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Film titile</span>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text ml-4">Year</span>
          <input
            onChange={(e) => {
              setYear(e.target.value);
            }}
            placeholder="from 1900 to 2030"
            type="number"
            min="1900"
            max="2030"
            className="form-control"
          ></input>
          <span className="input-group-text ml-4" style={margin}>
            Type
          </span>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="">Movie genre? </option>
            <option vlaue="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>

        <Link to="/films">
          <button
            type="submit"
            className="btn btn-success "
            onClick={makeRequestforFilms}
          >
            Search
          </button>
        </Link>
      </div>
    </form>
  );
};

export default SearchBar;
