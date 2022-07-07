import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Movie from "./MovieCard";
import AddMovie from "./AddMovie";

// const movies = MovieData;

const MovieList = () => {
  const movies = useContext(MovieContext)[0];
  return (
    <div className="MovieList">
      <AddMovie />
      <div className="card_container">
        {/* {console.log(value)} */}
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              year={movie.year}
              rating={movie.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
