import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
    },
    {
      id: 2,
      name: "The Godfather",
      year: 1972,
      rating: 9.2,
    },
    {
      id: 3,
      name: "The Godfather: Part II",
      year: 1974,
      rating: 9.0,
    },
    {
      id: 4,
      name: "The Dark Knight",
      year: 2008,
      rating: 9.0,
    },
    {
      id: 5,
      name: "12 Angry Birds",
      year: 2010,
      rating: 8.9,
    },
    {
      id: 6,
      name: "Schindler's List",
      year: 1993,
      rating: 8.9,
    },
    {
      id: 7,
      name: "Pulp Fiction",
      year: 1994,
      rating: 7.3,
    },
    {
      id: 8,
      name: "The Lord of the Rings: The Return of the King",
      year: 2003,
      rating: 8.9,
    },
    {
      id: 9,
      name: "Il buono, il brutto, il cattivo",
      year: 1966,
      rating: 8.9,
    },
    {
      id: 10,
      name: "Fight Club",
      year: 1999,
      rating: 8.4,
    },
    {
      id: 11,
      name: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      rating: 8.1,
    },
    {
      id: 12,
      name: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
      rating: 8.8,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
