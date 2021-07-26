import { useState } from "react"
import { internalApi } from "../../util/axiosRequests/GetPokemons"
import SearchApiGeneration from "../PokeApi/searchApiGeneration"
import GenerationDetails from "./generationDetails"

const generations = ['generation I', 'generation II', 'generation III', 'generation IV', 'generation V', 'generation VI', 'generation VII', 'generation VIII']

export default function SearchGeneration(){
    const [generation, setGeneration] = useState<any>()
    const [selection, setSelection] = useState('')
    const generationOptions = generations.map((generation, index) => {
        return <option className="mx-1 text-xl" value={index} key={index}>{generation}</option>
    })

    const handleSelection = (e: any) => {
        console.log(e.target.value)
        setSelection(e.target.value)
    }

    const searchGenerationDetailLocally = () => {
        if(selection === '') return;
        internalApi.get(`/generations/${selection}`)
            .then(res => {
                console.log(res.data);
                setGeneration(res.data);
            })
            .catch(console.log) 
    }


    return(
        <div>
            <h4 className="text-2xl text-center">Search your generation here</h4>
            <div className="text-center">
                <select name="generations" defaultValue={0} id="generation" onChange={handleSelection}>
                    {generationOptions}
                </select>
                <button className="p-2 mx-2 bg-blue-500 hover:bg-blue-400 hover:text-gray-900 border-1 rounded-md" onClick={searchGenerationDetailLocally}>Search</button>
            </div>
            {generation ? <div>
                <GenerationDetails generation={generation} />
                <SearchApiGeneration generationNumber={generation[0].id} generationStartNumber={generation[0].pokemonNumbers - generation[0].uniquePokemon} generationUniquePokemon={generation[0].pokemonNumbers} />
            </div> : <div>...</div>}
            
        </div>
    )
}