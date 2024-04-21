// Pokedex Seite
export const dynamic = 'force-dynamic'
import { PokedexPokemonPage } from '@/components/Pokedex/PokedexPage/PokedexPokemonPage'

export default async function PokemonPage({ params }: { params: any }) {
  const { id } = params
  return (
    <div className='flex flex-col w-screen h-screen items-center select-none overflow-y-auto'>
      <PokedexPokemonPage id={id} />
    </div>
  )
}
