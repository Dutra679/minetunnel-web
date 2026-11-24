import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { RelayList } from './components/RelayList'
import { WorldList } from './components/WorldList'
import { relays } from './data/relays'
import { worlds } from './data/worlds'
import type { WorldFilter } from './types'

function App() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<WorldFilter>('all')

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
          <WorldList worlds={filteredWorlds} />
          <RelayList relays={relays} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
