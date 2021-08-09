import React from "react";
import { actors } from "../data";

const Actor = ({name, movies}) => (
  <div>
    <h4>{name}</h4>
    <ul>
      {movies.map(movie => <li key={movie}>{movie}</li>)}
    </ul>
  </div>
)

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {
      actors.map(actor => <Actor key={actor.name} {...actor} />)
    }
  </div>;
}

export default Actors;
