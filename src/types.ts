export type WorldStatus = 'online' | 'offline'

export type World = {
  id: number
  name: string
  description: string
  version: string
  players: number
  maxPlayers: number
  status: WorldStatus
  latency: number | null
  imageIndex: number
  imageLabel: string
}

export type Relay = {
  id: number
  city: string
  region: string
  status: 'Operacional'
  latency: number
  capacity: number
}

export type WorldFilter = 'all' | WorldStatus
