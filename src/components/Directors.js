import React from "react";
import { directors } from "../data";

const Director = ({name, movies}) => (
  <div>
    <h4>{name}</h4>
    <ul>
      {movies.map(movie => <li key={movie}>{movie}</li>)}
    </ul>
  </div>
)

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {
      directors.map(director => <Director key={director.name} {...director} />)
    }
  </div>;
}

export default Directors;
