
type Game = {
    originalVersions: string[];
    upperVersions?: string[];
}

export type PokeGeneration =  ({
    id: number;
    games: Game;
    pokemonNumbers?: number;
    uniquePokemon: number;
    region: string;
})[]

export type UniqueGeneration = {
    id: number;
    games: Game;
    pokemonNumbers?: number;
    uniquePokemon: number;
    region: string;
}

const generations: PokeGeneration = [
    {
        id: 0,
        games: {
            originalVersions: ['red', 'blue'],
            upperVersions: ['yellow']
        },
        pokemonNumbers: 151,
        uniquePokemon: 151,
        region: 'kanto'
    },
    {
        id: 1,
        games: {
            originalVersions: ['gold', 'silver'],
            upperVersions: ['crystal']
        },
        pokemonNumbers: 251,
        uniquePokemon: 100,
        region: 'Johto'
    },
    {
        id: 2,
        games: {
            originalVersions: ['ruby', 'sapphire', 'FireRed', 'LeafGreen'],
            upperVersions: ['Emerald']
        },
        pokemonNumbers: 386,
        uniquePokemon: 135,
        region: 'Hoenn'
    },
    {
        id: 3,
        games: {
            originalVersions: ['Diamond', 'Pearl', 'HeartGold', 'SoulSilver'],
            upperVersions: ['Platinum']
        },
        pokemonNumbers: 493,
        uniquePokemon: 107,
        region: 'Sinnoh'
    },
    {
        id: 4,
        games: {
            originalVersions: ['black', 'white', 'Black 2', 'White 2']
        },
        pokemonNumbers: 649,
        uniquePokemon: 156,
        region: 'Unova'
    },
    {
        id: 5,
        games: {
            originalVersions: ['X', 'Y', 'OmegaRuby', 'AlphaSapphire']
        },
        pokemonNumbers: 721,
        uniquePokemon: 72,
        region: 'Kalos'
    },
    {
        id: 6,
        games: {
            originalVersions: ['Sun', 'Moon', 'Let\'s go, Pikachu!', 'Let\'s go, Eevee!'],
            upperVersions: ['Ultra Sun', 'Ultra Moon']
        },
        pokemonNumbers: 809,
        uniquePokemon: 88,
        region: 'Alola'
    },
    {
        id: 7,
        games: {
            originalVersions: ['Sword', 'Shield', 'Brillant Diamond', 'Shining Pearl', 'Legends: Arceus']
        },
        pokemonNumbers: 898,
        uniquePokemon: 89,
        region: 'Galar'
    }
]

export {generations}