import type { NextApiRequest, NextApiResponse } from 'next'
import {generations} from '../../../src/util/data/pokemonGenerations'
import type {PokeGeneration} from '../../../src/util/data/pokemonGenerations'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokeGeneration>
) {
  if(req.method === 'GET'){
    res.status(200).json(generations)
  } else {
      res.status(401)
  }
}