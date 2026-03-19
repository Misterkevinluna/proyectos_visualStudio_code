const { http } = require('../plugins');

// const getPokemonById = ( id ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

//     return fetch(url)
//     .then( ( resp ) => resp.json())
//     // .then( () => { throw new Error('Pokemon no existe') }) 
//     .then( ( pokemon ) => pokemon.name );
// };


export const getPokemonNameById = async( id: number|string ): Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const pokemon = await http.get( url );

    return pokemon.name;
};
