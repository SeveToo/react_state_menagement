import React from "react";

const Movie = ({ name, year, rating }) => {
  return (
    <div className="card">
      <button className="deleteButton">X</button>
      <h3>{name}</h3>
      <p>rok produkcji: {year}</p>
      <div className="ratingBar">
        <div
          style={{ width: Math.floor(rating * 10) + `%` }}
          className="ratingBarValue"
        ></div>
        <div className="rating">{rating}</div>
      </div>
    </div>
  );
};

export default Movie;
