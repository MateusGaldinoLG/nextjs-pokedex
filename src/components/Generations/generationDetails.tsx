

const generations = ['generation I', 'generation II', 'generation III', 'generation IV', 'generation V', 'generation VI', 'generation VII', 'generation VIII']

export default function GenerationDetails({generation}: any){
    const generationName = generations[generation[0].id];
    const originalGames = generation[0].games.originalVersions.map((game: string, index: number) => <p key={index}>{game}</p>)

    const getUpperGames = () => {
        let upperGames;
        if(typeof generation[0].games.upperVersions !== 'undefined'){
            upperGames = generation[0].games.upperVersions.map((game: string, index: number) => <p key={index}>{game}</p>)
        } else {
            upperGames = <p>none</p>
        }
        return upperGames;
    }

    
    const upperGames = getUpperGames();

    return(
        <div className="flex flex-col justify-center items-center p-6 m-3 bg-blue-900 bg-opacity-85 text-white rounded-lg">
            <h5 className="text-2xl font-semibold text-red-400">{ generationName }</h5>
            <div className="flex">
                <div className="mr-1">
                    <p className="text-xl font-medium">Original Games</p>
                    <div>{originalGames}</div>
                </div>
                <div className="ml-1">
                    <p className="text-xl font-medium">Upper Game versions</p>
                    <div>{upperGames}</div>
                </div>
            </div>
            <div>
                <p className="text-xl text-center"><span className="font-medium">Region:</span> {generation[0].region}</p>
                <div className="flex">
                    <p className="text-xl mx-1"><span className="font-medium">Pokemons:</span> {generation[0].pokemonNumbers}</p>
                    <p className="text-xl mx-1"><span className="font-medium">New Pokemons:</span> {generation[0].uniquePokemon}</p>
                </div>
            </div>
        </div>
    )
}