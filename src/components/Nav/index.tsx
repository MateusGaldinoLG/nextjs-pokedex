import Link from 'next/link';

export default function Nav(){
    return (
        <div className="flex justify-between md:flex-row flex-col p-3 bg-red-600 text-gray-50">
            <div>
                <h2 className="text-3xl">PokeSite</h2>
            </div>
            <div>
                <ul className="flex md:flex-row flex-col space-x-3">
                    <li className="text-2xl"><a href="#" className="hover:underline">Pokemons</a></li>
                    <li className="text-2xl"><a href="#" className="hover:underline">Generations</a></li>
                    <li className="text-2xl"><Link href="/search"><a className="hover:underline">Search</a></Link></li>
                </ul>
            </div>
        </div>
    )
}