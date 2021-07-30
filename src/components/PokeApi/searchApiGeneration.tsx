import Link from "next/link";
import { useEffect, useState } from "react"
import { api } from "../../util/axiosRequests/GetPokemons";

type genId = {
    generationNumber: number
}

export default function SearchApiGeneration({generationNumber}: genId){
    const[pokemons, setPokemons] = useState<any[]>([]);
    const allPokemons = pokemons.map((pokemon: any, index: number) => <p key={index}>{index + 1}: <Link href={`/pokemons/${pokemon.name}`}><a className="hover:underline">{pokemon.name}</a></Link></p>)
    const [isWrong, setIsWrong] = useState(false);

    useEffect(() => {
        api.get(`/generation/${generationNumber+1}`)
            .then(res => {
                console.log(res.data.pokemon_species);
                setPokemons(res.data.pokemon_species);
            })
            .catch(err => {
                console.log(err);
                setIsWrong(true);
            }) 
    }, [generationNumber])

    return (
        <div className="bg-blue-900 text-white p-4 m-2 rounded-md">
            {/* {JSON.stringify(pokemons)}
            {pokemons[0].name} */}
            <h5 className="text-center font-semibold text-xl">All generation {generationNumber + 1}</h5>
            <div className="grid grid-cols-4">
                {allPokemons}
            </div>
        </div>
    )


}