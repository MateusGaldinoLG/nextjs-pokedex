
type pokemonName = {
    name: string;
}

export default function NotFound({name}:pokemonName){
    return(
        <div className="flex flex-column justify-center items-center">
            <div>
                <h4 className="text-2xl text-red-500">Error: Pokemon with name <span className="text-red-900">{name}</span> Not found</h4>
                <p className="text-xl">Please check if the name has any spelling errors</p>
            </div>
        </div>
    )
}