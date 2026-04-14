import { useState } from 'react';

interface pokemonItem {
  name: string;
  url: string;
}

interface pokemonResponse {
  count: number;
  next: string | null;
  previous: string;
  results: pokemonItem[];
}

const Rendering8Exercise = () => {

  const [pokemons, setPokemons] = useState<pokemonItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getTheFuckingPokemons = async () => {
    try{
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      if(!response.ok){
        throw new Error(response.statusText)
      }
      const data: pokemonResponse = await response.json();
      setPokemons(data.results);
    }
    catch(error){
      if(error instanceof Error) setError(`error is this one: ${error.message}`)
    }
    finally{
      setLoading(false);
    }
  }

  if(loading){
    return <p>Loading...</p>;
  }

  if(error){
    return <p>{error}</p>;
  }
    
  return (
    <>
      <button onClick={getTheFuckingPokemons}>Fetch pokemons</button>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
};

export default Rendering8Exercise;
