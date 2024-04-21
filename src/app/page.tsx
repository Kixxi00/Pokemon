// Pokedex Seite
export const dynamic = 'force-dynamic'
import { PokedexPage } from '@/components/Pokedex/PokedexPage/PokedexPage'
import { Pokemon, PokemonClient } from 'pokenode-ts'

export default async function Index() {
  return (
    <div className='flex flex-col w-screen h-screen items-center select-none overflow-y-auto'>
      <PokedexPage />
    </div>
  )
}
