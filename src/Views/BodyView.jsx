import React from "react";
import { Route, Switch } from "react-router-dom";

import FilmsList from "../Components/FilmsList";
import FilmView from "./FilmView";

import SearchBar from "../Components/SearchBar";

const BodyView = ({ match }) => {
  return (
    <>
      <SearchBar></SearchBar>
      <Switch>
        <Route path="/films/:filmId" component={FilmView}></Route>
        <Route path={`${match.url}films/`} component={FilmsList}></Route>
      </Switch>
    </>
  );
};

export default BodyView;
