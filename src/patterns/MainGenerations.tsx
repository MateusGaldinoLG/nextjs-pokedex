import SearchGeneration from "../components/Generations/searchGeneration";


export default function MainGenerations(){
    return(
        <main className=" my-3">
                <h3 className="text-3xl text-center my-3">Search all details about your favorite <span className="text-red-700">Generation</span> here</h3>
                <div className="flex flex-wrap justify-center items-center">
                    <SearchGeneration />
                </div>
        </main>
    )
}