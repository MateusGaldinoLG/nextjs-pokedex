import SearchPokemon from "../components/PokeApi/searchPokemon";


export default function MainSearch(){
    return(
        <>
            <main className=" my-3">
                <h3 className="text-3xl text-center my-3">Search your favorite <span className="text-red-600">Pokemon</span> here</h3>
                <p className="text-2xl text-center my-3">Search by name and discover the details of any pokemon</p>
                <SearchPokemon />
            </main>
        </>
    )
}