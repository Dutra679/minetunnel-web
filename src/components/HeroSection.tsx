import type { WorldFilter } from '../types'

type HeroSectionProps = {
  totalWorlds: number
  onlineWorlds: number
  totalPlayers: number
  search: string
  statusFilter: WorldFilter
  onSearchChange: (value: string) => void
  onStatusFilterChange: (value: WorldFilter) => void
}

export function HeroSection({
  totalWorlds,
  onlineWorlds,
  totalPlayers,
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
}: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-row">
          <div className="hero-copy">
            <p className="eyebrow">Rede comunitária</p>
            <h1>Mundos compartilhados, conexão simplificada.</h1>
            <p className="hero-description">
              Acompanhe os mundos publicados pelo MineTunnel e confira a saúde dos relays que mantêm cada rota disponível.
            </p>
          </div>

          <dl className="summary">
            <div>
              <dt>Mundos</dt>
              <dd>{totalWorlds}</dd>
            </div>
            <div>
              <dt>Online</dt>
              <dd className="summary-online">{onlineWorlds}</dd>
            </div>
            <div>
              <dt>Jogadores</dt>
              <dd>{totalPlayers}</dd>
            </div>
          </dl>
        </div>

        <div className="filters">
          <label>
            <span className="sr-only">Buscar mundo</span>
            <input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Buscar por nome ou descrição"
            />
          </label>
          <label>
            <span className="sr-only">Filtrar por status</span>
            <select
              value={statusFilter}
              onChange={(event) => onStatusFilterChange(event.target.value as WorldFilter)}
            >
              <option value="all">Todos os status</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  )
}
