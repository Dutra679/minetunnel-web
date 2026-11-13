import type { Relay } from '../types'

export const relays: Relay[] = [
  {
    id: 1,
    city: 'São Paulo',
    region: 'Brasil, Sudeste',
    status: 'Operacional',
    latency: 12,
    capacity: 64,
  },
  {
    id: 2,
    city: 'Santiago',
    region: 'Chile, Central',
    status: 'Operacional',
    latency: 48,
    capacity: 41,
  },
  {
    id: 3,
    city: 'Miami',
    region: 'EUA, Leste',
    status: 'Operacional',
    latency: 112,
    capacity: 29,
  },
]
