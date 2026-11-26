import type { World } from '../types'

const worldsUrl = `${import.meta.env.BASE_URL}worlds.json`

export async function fetchWorlds(): Promise<World[]> {
  const response = await fetch(worldsUrl)

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os mundos (${response.status}).`)
  }

  let data: unknown

  try {
    data = await response.json()
  } catch {
    throw new Error('A fonte de dados dos mundos está indisponível ou retornou conteúdo inválido.')
  }

  if (!Array.isArray(data)) {
    throw new Error('A fonte de dados retornou um formato inválido.')
  }

  return data as World[]
}
