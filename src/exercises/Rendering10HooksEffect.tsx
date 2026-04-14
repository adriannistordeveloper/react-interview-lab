import { useCallback, useEffect, useState } from 'react';

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

  const getTheFuckingPokemons = useCallback(async () => {
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
  }, []);
  
  useEffect(() => {
    getTheFuckingPokemons();
  }, [getTheFuckingPokemons]);

  return {pokemons, loading, error};
}

const Rendering10HooksEffect = () => {
  const {pokemons, loading, error} = useMyStuff();

  if(loading) {
    return <p>Loading ...</p>;
  }

  if(error) {
    return <p>{error}</p>;
  }
    console.log('abc');
  return (
    <>
      {/* <button onClick={getTheFuckingPokemons}>Fetch pokemons</button> */}
      <p> {error} </p>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
};

export default Rendering10HooksEffect;
