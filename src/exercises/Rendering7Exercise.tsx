import { useEffect, useState } from "react";

type PokemonListItem = {
    name: string;
    url: string;
}

type PokemonResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[]
}

const Rendering7Exercise = () => {
    const [listItems, setListItems] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getPokemons = async () => {
            try{
                setLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 5000));

                const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const data: PokemonResponse = await response.json();
                setListItems(data.results);
            }
            catch(error: unknown){
                if(error instanceof Error){
                    setError(`Error fetching pokemons: ${error.message}`)
                }
            }
            finally{
                setLoading(false);
            }
        };
        getPokemons();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {error ? <p>{error}</p> : 
                <ul>
                    {listItems.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            }
        </>
    );
};

export default Rendering7Exercise;
