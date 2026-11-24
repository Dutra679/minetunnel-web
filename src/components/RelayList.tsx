import type { Relay } from '../types'
import { RelayCard } from './RelayCard'

type RelayListProps = {
  relays: Relay[]
}

export function RelayList({ relays }: RelayListProps) {
  return (
    <section id="relays" aria-labelledby="relays-titulo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Infraestrutura</p>
          <h2 id="relays-titulo">Rede de relays</h2>
        </div>
        <span className="active-relays">
          <i />
          {relays.length} ativos
        </span>
      </div>

      <div className="relay-grid">
        {relays.map((relay) => (
          <RelayCard key={relay.id} relay={relay} />
        ))}
      </div>

      <p className="relay-note">
        Os relays encaminham as conexões sem hospedar os mundos. O progresso permanece no computador de quem abriu o túnel.
      </p>
    </section>
  )
}
