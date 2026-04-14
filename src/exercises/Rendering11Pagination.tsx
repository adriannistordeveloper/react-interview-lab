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

const Rendering11Pagination = () => {

  const [pokemons, setPokemons] = useState<PokemonItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const [prevUrl, setPrevUrl] = useState<string | null>(null);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const getTheFuckingPokemons = async (url: string) => {
    try{
      setLoading(true);
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(response.statusText)
      }
      const data: PokemonResponse = await response.json();
      setPokemons(data.results);
      setPrevUrl(data.previous);
      setNextUrl(data.next);
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
      <button onClick={() => getTheFuckingPokemons('https://pokeapi.co/api/v2/pokemon/')}>Fetch pokemons</button>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button onClick={() => {if(prevUrl) getTheFuckingPokemons(prevUrl)}}>Previous</button>
      <button onClick={() => {if(nextUrl) getTheFuckingPokemons(nextUrl)}}>Next</button>
    </>
  )
};

export default Rendering11Pagination;
