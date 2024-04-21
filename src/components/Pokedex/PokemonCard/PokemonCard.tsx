'use client'
import { Card } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { Pokemon, PokemonClient } from 'pokenode-ts'
import { FC, useEffect, useState } from 'react'

export interface PokemonCardProps {
  id: number
  name: string
}

export const PokemonCard: FC<PokemonCardProps> = ({ id, name }) => {
  const [pokemon, setPokemon] = useState<Pokemon>()

  useEffect(() => {
    const fetchData = async () => {
      const api = new PokemonClient()
      const pokemonData: Pokemon = await api.getPokemonByName(name)
      setPokemon(pokemonData)
    }

    fetchData()
  }, [])
  if (!pokemon) return <>loading...</>
  //Variablendeklaration
  const idstring = id.toString().padStart(4, '0') // 00001, 00002
  const src = pokemon!.sprites.other?.['official-artwork'].front_default || ''
  return (
    <Link href={'/pokedex/' + id}>
      <Card className='w-[280px] h-[300px] bg-card text-card-foreground items-center flex flex-col justify-between'>
        <h1 className='text-center text-2xl border-b-2 border-black font-bold flex flex-row gap-2'>
          <p>#{idstring}</p>
          <p>{name.toUpperCase()} </p>
        </h1>
        <Image
          className='object-cover'
          src={src}
          alt={pokemon.name + '-Image'}
          width={200}
          height={200}
        />
      </Card>
    </Link>
  )
}
