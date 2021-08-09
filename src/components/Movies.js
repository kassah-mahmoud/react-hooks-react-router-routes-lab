import React from "react";
import { movies } from "../data";

const Movie = ({title, time, genres}) => (
  <div>
    <div>{title}</div>
    <div>{time}</div>
    <ul>
      {
        genres.map((genre) => <li key={genre}>{genre}</li>)
      }
    </ul>
  </div>
)

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {
      movies.map(({title, time, genres}) => <Movie key={title} title={title} time={time} genres={genres} />)
    }

  </div>;
}

export default Movies;
