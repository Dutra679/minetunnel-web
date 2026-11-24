import type { Relay } from '../types'

type RelayCardProps = {
  relay: Relay
}

export function RelayCard({ relay }: RelayCardProps) {
  return (
    <article className="relay-card">
      <div className="relay-heading">
        <div>
          <p>{relay.region}</p>
          <h3>{relay.city}</h3>
        </div>
        <span>{relay.status}</span>
      </div>
      <dl className="relay-meta">
        <div>
          <dt>Latência média</dt>
          <dd>{relay.latency} ms</dd>
        </div>
        <div>
          <dt>Capacidade</dt>
          <dd>{relay.capacity}%</dd>
        </div>
      </dl>
      <div className="capacity" aria-label={`Capacidade em ${relay.capacity} por cento`}>
        <span style={{ width: `${relay.capacity}%` }} />
      </div>
    </article>
  )
}
