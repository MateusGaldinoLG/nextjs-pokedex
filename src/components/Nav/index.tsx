import Link from 'next/link';

export default function Nav(){
    return (
        <div className="flex sm:justify-between justify-center sm:flex-row flex-col sm:p-3 items-center bg-red-600 text-gray-50">
            <div>
                <h2 className="text-3xl"><Link href="/home" ><a className="hover:underline">PokeSite</a></Link></h2>
            </div>
            <div>
                <ul className="flex sm:flex-row flex-col sm:space-x-3">
                    <li className="text-2xl"><Link href="/home" ><a className="hover:underline">Pokemons</a></Link></li>
                    <li className="text-2xl"><Link href="/generations"><a className="hover:underline">Generations</a></Link></li>
                    <li className="text-2xl"><Link href="/search"><a className="hover:underline">Search</a></Link></li>
                </ul>
            </div>
        </div>
    )
}