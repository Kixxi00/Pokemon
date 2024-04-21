'use client'

import Image from 'next/image'
import {
  Pokemon,
  PokemonAbility,
  PokemonClient,
  PokemonEncounter,
  PokemonHabitat,
  PokemonType
} from 'pokenode-ts'
import { useEffect, useState } from 'react'

// Erstellung Komponente(Funktion) "PokedexPage" die asynchron ist
export const PokedexPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [encounters, setEncounters] = useState<any[]>()

  useEffect(() => {
    const fetchData = async () => {
      const api = new PokemonClient()
      const pokemonData: Pokemon = await api.getPokemonByName('pikachu')
      setPokemon(pokemonData)

      const encounterResponse = await fetch(
        pokemonData.location_area_encounters
      )
      const encounterData = await encounterResponse.json()
      setEncounters(encounterData)
    }

    fetchData()
  }, [])

  if (!pokemon || !encounters) return <></>
  const src = pokemon!.sprites.other?.['official-artwork'].front_default || ''
  console.log(encounters)
  return (
    <div className='flex flex-row bg-slate-900 w-screen h-screen'>
      <div
        id={'leftside'}
        className='flex flex-col items-center justify-center bg-slate-800 w-1/2'
      >
        <h1 className='font-semibold text-2xl text-center text-white bg-slate-700 '>{`#${pokemon.id} ${pokemon.name.toLocaleUpperCase()}`}</h1>
        <Image
          className='object-cover'
          src={src}
          alt={pokemon.name + '-Image'}
          width={400}
          height={400}
        />
      </div>
      <div
        id={'rightside'}
        className='flex flex-col items-center justify-center bg-orange-50 w-1/2 px-4'
      >
        <div className='flex flex-row gap-4 bg-orange-100 w-full'>
          <h2 className='bg-orange-200'>Typ: </h2>
          <div className='bg-orange-300'>
            {' '}
            {pokemon.types.map((type: PokemonType) => {
              return (
                <div key={type.type.name} className='bg-orange-400'>
                  {type.type.name}
                </div>
              )
            })}
          </div>
        </div>

        <div className='flex flex-row gap-12 w-full'>
          <div className='flex flex-row gap-4 bg-orange-500'>
            <h2 className='bg-orange-600'>Größe: </h2>
            <div className='bg-orange-700'> {pokemon.height} cm</div>
          </div>
          <div className='flex flex-row gap-4 bg-orange-500'>
            <h2 className='bg-orange-600'>Gewicht: </h2>
            <div className='bg-orange-700'> {pokemon.weight / 10} kg</div>
          </div>
        </div>
        <div className='flex flex-row gap-4 bg-orange-500 w-full'>
          <h2 className='bg-orange-600'>Landschaft: </h2>
          <div className='bg-orange-700'>
            {' '}
            {encounters!.map((encounter) => {
              return (
                <div
                  key={encounter.location_area.name}
                  className='bg-orange-400'
                >
                  {encounter.location_area.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
