// import { useEffect } from "react";



export default function PokemonCard({pokemonData}: any){
    const abilities = pokemonData.abilities.map((ability: any) => <li className="list-disc list-inside" key={ability.ability.name}>{ability.ability.name}</li>)
    const stats = pokemonData.stats.map((stat: any) => <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>)
    const types = pokemonData.types.map((type: any) => <li key={type.slot}> {type.type.name} </li>)
    // useEffect(() =>
    //     console.log(pokemonData.abilities)
    // )
    return (
        <div className="flex flex-col justify-center align-center mx-8 p-5 bg-red-200 rounded-xl">
            {/* {JSON.stringify(pokemonData.abilities)}
            {pokemonData.base_experience} */}
            <h4 className="text-2xl text-center font-bold">{pokemonData.forms[0].name.toUpperCase()}</h4>
            <div>
                <h5 className="text-xl text-center font-medium">Types</h5>
                <ul className="text-center"> {types} </ul>
            </div>
            <div className="flex justify-center">
                <div className="mx-8 p-2">
                    <h5 className="text-xl font-medium">Stats</h5>
                    <p>Base xp: {pokemonData.base_experience}</p>
                    <div>{stats}</div>
                </div>
                <div className="mx-8 p-2">
                    <h5 className="text-xl font-medium">Abilities</h5>
                    <ul>{abilities}</ul>
                </div>
            </div>
        </div>
    )
}