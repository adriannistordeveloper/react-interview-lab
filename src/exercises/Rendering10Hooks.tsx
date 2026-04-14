import { useState } from 'react';

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

const useMyStuff = () => {
  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const getTheFuckingPokemons = async () => {
    try{
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      if(!response.ok) throw new Error(response.statusText);
      const data: PokemonResponse = await response.json();
      setPokemons(data.results);
    }
    catch(error){
      if(error instanceof Error) {setError(error.message)};
    }
    finally{
      setLoading(false);
    }
  }

  return {pokemons, loading, error, getTheFuckingPokemons};
}

const Rendering10Hooks = () => {
  const {pokemons, loading, error, getTheFuckingPokemons} = useMyStuff();

  if(loading) {
    return <p>Loading ...</p>;
  }

  if(error) {
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

export default Rendering10Hooks;
