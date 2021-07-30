

export default function MainHome(){
    return(
        <main className="flex flex-col justify-center items-center my-5 p-1">
            <h3 className="text-3xl font-bold pb-2">Welcome to the <span className="text-green-800">Pokemon Site</span></h3>
            <div className="w-80 h-32">
                <p className="text-xl">This site is dedicated to show pokemon basic details and also pokemon generation details</p>
                <p className="text-xl">In the generations, you can search between all 7 pokemon generations, and in the Search you can see details of pokemon by name</p>
            </div>
        </main>
    )
}