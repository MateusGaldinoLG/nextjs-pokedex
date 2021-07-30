import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import NotFound from "../../src/components/errors/NotFound";
import AppHead from "../../src/components/Head";
import PokemonCard from "../../src/components/PokeApi/PokemonCard";
import Header from "../../src/patterns/Header";
import { api } from "../../src/util/axiosRequests/GetPokemons";


export default function Pokemon(){
    const router = useRouter()
    const [pokemonDetails, setPokemonDetails] = useState<any>();
    const [pokemon, setPokemon] = useState('');
    const [render, setRender] = useState(false)

    useEffect(() => {
        if(!router.isReady) return;
        const {pokemon} = router.query
        if(!pokemon) return;
        console.log(pokemon)
        setPokemon(pokemon.toString())
    }, [router.isReady])

    useEffect(() => {
        if(pokemon){
            api.get(`/pokemon/${pokemon}`)
                .then((res) => {
                    console.log(res?.data)
                    if(!res.data) {setRender(false)}
                    else {
                        setPokemonDetails(res?.data)
                        setRender(true)
                    }
                })
                .catch(console.log)
        }
    }, [pokemon])

    return (
        <div>
            <AppHead title={pokemon} />
            <Header />
            <main className="m-7 items-center">
                {render ? <PokemonCard pokemonData={pokemonDetails} /> : <NotFound name={pokemon} />}
            </main>
        </div>
    )
}