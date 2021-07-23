import { useEffect, useState } from "react";
import { api } from "../../util/axiosRequests/GetPokemons";
import PokemonCard from "./PokemonCard";

export default function SearchPokemon(){
    //conditional states
    const [show, setShow] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    //input states
    const [input, setInput] = useState('Ditto')
    const [pokemon, setPokemon] = useState<object>()

    const searchInput = () => {
            api.get(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
            .then((res) => {
                console.log(res?.data)
                setPokemon(res?.data)
                setShow(true);
                setIsWrong(false);
            })
            .catch((err: any) => {
                console.log(err)
                setIsWrong(true);
            })
    }

    const handleInput = (e: any) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

    return(
        <div>
            <div className="flex flex-column items-center justify-center">
                <input
                    type="text"
                    value={input}
                    onChange={handleInput}
                    className="border-blue-500 border-b-2"
                />
                <button className="p-2 mx-2 bg-blue-500 hover:bg-blue-400 hover:text-gray-900 border-1 rounded-md" onClick={searchInput}>Search</button>
            </div>
            {(show && !isWrong) ? <PokemonCard pokemonData={pokemon} /> : <div>...</div>}
        </div>
    )
}