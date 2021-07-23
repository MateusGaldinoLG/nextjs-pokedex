// import { useEffect } from "react";



export default function PokemonCard({pokemonData}: any){
    const abilities = pokemonData.abilities.map((ability: any) => <li key={ability.ability.name}>{ability.ability.name}</li>)
    // useEffect(() =>
    //     console.log(pokemonData.abilities)
    // )
    return (
        <div className="flex flex-col justify-center align-center mx-auto">
            {JSON.stringify(pokemonData.abilities)}
            {pokemonData.base_experience}
            <h4 className="text-xl text-center font-bold">{pokemonData.forms[0].name}</h4>
            <div className="mx-10">
                <h5 className="text-lg font-medium">Abilities</h5>
                <ul>{abilities}</ul>

            </div>
        </div>
    )
}