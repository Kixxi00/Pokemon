// Pokedex Seite
export const dynamic = 'force-dynamic'
import { PokemonCard } from '@/components/Pokedex/PokemonCard/PokemonCard'
import { PokemonClient } from 'pokenode-ts'

export default async function Index() {
  const api = new PokemonClient()
  const pokemonDatasleft = await fetch(
    'https://pokeapi.co/api/v2/pokemon'
  ).then((data) => data.json())

  const pokemonDatasright =
    (await fetch(pokemonDatasleft.next).then((data) => data.json())) || []

  if (!pokemonDatasleft || !pokemonDatasright) return <>Loading...</>

  return (
    <div className='flex flex-row w-screen h-screen justify-between'>
      {/*LinkeSeite von der Page*/}
      <div className='p-4 grid grid-cols-3 gap-4 items-center select-none border-r-2 border-black/40'>
        {pokemonDatasleft.results.map(
          (pokemon: { name: string; url: string }, index: number) => {
            const idArray: string[] = pokemon.url.split('/')
            const id: number = Number(idArray[idArray.length - 2])
            return <PokemonCard id={id} name={pokemon.name} key={index} />
          }
        )}
      </div>
      {/*LinkeSeite von der Page*/}
      <div className='p-4 grid grid-cols-3 gap-4 items-center select-none border-l-2 border-black/40'>
        {pokemonDatasright?.results.map(
          (pokemon: { name: string; url: string }, index: number) => {
            const idArray: string[] = pokemon.url.split('/')
            const id: number = Number(idArray[idArray.length - 2])
            return <PokemonCard id={id} name={pokemon.name} key={index} />
          }
        )}
      </div>
    </div>
  )
}
