import { useState, useCallback } from 'react';

interface PokemonItem {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
}

const Rendering9Exercise = () => {

  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getTheFuckingPokemons = useCallback(async () => {
    try{
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      if(!response.ok){
        throw new Error(response.statusText)
      }
      const data: PokemonResponse = await response.json();
      setPokemons(data.results);
    }
    catch(error){
      if(error instanceof Error) setError(`error is this one: ${error.message}`)
    }
    finally{
      setLoading(false);
    }
  }, []);

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

export default Rendering9Exercise;
