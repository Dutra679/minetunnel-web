import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { RelayList } from './components/RelayList'
import { WorldList } from './components/WorldList'
import { relays } from './data/relays'
import { fetchWorlds } from './services/worldService'
import type { World, WorldFilter } from './types'

function App() {
  const [worlds, setWorlds] = useState<World[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<WorldFilter>('all')

  useEffect(() => {
    let isActive = true

    async function loadWorlds() {
      setIsLoading(true)
      setLoadError(null)

      try {
        const loadedWorlds = await fetchWorlds()

        if (isActive) {
          setWorlds(loadedWorlds)
        }
      } catch (error) {
        if (isActive) {
          const message = error instanceof Error
            ? error.message
            : 'Não foi possível carregar os mundos.'

          setWorlds([])
          setLoadError(message)
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadWorlds()

    return () => {
      isActive = false
    }
  }, [reloadKey])

  const normalizedSearch = search.trim().toLocaleLowerCase('pt-BR')
  const filteredWorlds = worlds.filter((world) => {
    const matchesStatus = statusFilter === 'all' || world.status === statusFilter
    const matchesSearch =
      normalizedSearch.length === 0 ||
      world.name.toLocaleLowerCase('pt-BR').includes(normalizedSearch) ||
      world.description.toLocaleLowerCase('pt-BR').includes(normalizedSearch)

    return matchesStatus && matchesSearch
  })

  const onlineWorlds = worlds.filter((world) => world.status === 'online').length
  const totalPlayers = worlds.reduce((total, world) => total + world.players, 0)

  return (
    <div className="app">
      <Header />

      <main id="inicio">
        <HeroSection
          totalWorlds={worlds.length}
          onlineWorlds={onlineWorlds}
          totalPlayers={totalPlayers}
          search={search}
          statusFilter={statusFilter}
          onSearchChange={setSearch}
          onStatusFilterChange={setStatusFilter}
        />

        <div className="container dashboard">
          <WorldList
            worlds={filteredWorlds}
            isLoading={isLoading}
            error={loadError}
            onRetry={() => setReloadKey((currentKey) => currentKey + 1)}
          />
          <RelayList relays={relays} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
