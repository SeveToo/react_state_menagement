import React, { useContext } from "react";
// import MovieData from "../context/MovieContext";
import { MovieContext } from "../context/MovieContext";

const Nav = () => {
  // const value = MovieData.length;
  const value = useContext(MovieContext)[0];
  return (
    <div className="Nav">
      <h3>SeveTo</h3>
      <p>
        Akutalnie na liście {value.length < 2 ? "jest " : "są "}
        <span className="special">{value.length}</span>{" "}
        {value.length > 1 ? "filmy " : value.length == 0 ? "filmów " : "film "}
      </p>
      <button onClick={() => {}} className="btn">
        Dodaj Film
      </button>
    </div>
  );
};

export default Nav;
