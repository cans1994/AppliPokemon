import React from "react";
import { useState } from "react";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  return (
    <div className="app-container">
      <h1>Pokemon Evolution</h1>
      <div className="pokemon-container"></div>
      <button className="load-more">Charger plus</button>
    </div>
  );
}

export default App;
