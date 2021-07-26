import { useEffect, useState } from "react"
import { api } from "../../util/axiosRequests/GetPokemons";


type ApiGeneration = {
    generationNumber: number;
    generationStartNumber: number;
    generationUniquePokemon: number;
}

export default function SearchApiGeneration({generationNumber, generationStartNumber, generationUniquePokemon}: ApiGeneration){
    const[pokemons, setPokemons] = useState<any>();
    const allPokemons = pokemons.map((pokemon: any, index: number) => <p key={index}>{index + 1}: {pokemon.name}</p>)
    const [isWrong, setIsWrong] = useState(false);

    useEffect(() => {
        api.get(`/pokemon?limit=${generationUniquePokemon}&offset=${generationStartNumber}`)
            .then(res => {
                console.log(res.data.results);
                setPokemons(res.data.results);
            })
            .catch(err => {
                console.log(err);
                setIsWrong(true);
            }) 
    }, [generationUniquePokemon, generationStartNumber])

    // const searchGenerationDetailLocally = () => {
    //     api.get(`/pokemon?limit=${generationUniquePokemon}&offset=${generationStartNumber}`)
    //         .then(res => {
    //             console.log(res.data.results);
    //             setPokemons(res.data);
    //         })
    //         .catch(console.log) 
    // }

    return (
        <div>
            {/* {JSON.stringify(pokemons)}
            {pokemons[0].name} */}
            <h5>All generation {generationNumber + 1}</h5>
            <div className="grid grid-cols-4">
                {allPokemons}
            </div>
        </div>
    )


}