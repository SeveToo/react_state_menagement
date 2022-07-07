import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateYear = (e) => {
    setYear(e.target.value);
  };

  const updateRating = (e) => {
    setRating(e.target.value);
  };

  const clearInputs = () => {
    setName("");
    setYear("");
    setRating("");
  };

  const getLastId = () => {
    return movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => {
      return [...prevMovies, { name, year, rating, id: getLastId() + 1 }];
    });
    clearInputs();
  };

  return (
    <form onSubmit={addMovie}>
      <input
        placeholder="name"
        type="text"
        value={name}
        onChange={updateName}
      />
      <input
        placeholder="year"
        type="text"
        value={year}
        onChange={updateYear}
      />
      <input
        placeholder="rating"
        type="text"
        value={rating}
        onChange={updateRating}
      />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default AddMovie;
