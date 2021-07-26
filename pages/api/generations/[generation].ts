import type { NextApiRequest, NextApiResponse } from 'next'
import {generations} from '../../../src/util/data/pokemonGenerations'
import type {PokeGeneration, UniqueGeneration} from '../../../src/util/data/pokemonGenerations'

function filterByGeneration(generation: UniqueGeneration, query: string){
  return generation.id == parseInt(query)

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokeGeneration | string>
) {
  const { generation } = req.query;
  if(req.method === 'GET'){
    const pokemonGeneration = generations.filter((gen) => filterByGeneration(gen, generation.toString()))
    if(pokemonGeneration.length == 0){
        return res.status(404).send('Generation not found')
    }
    return res.status(200).json(pokemonGeneration)
  } else {
    res.status(401)
  }
}