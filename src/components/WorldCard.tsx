import type { World } from '../types'

type WorldCardProps = {
  world: World
}

export function WorldCard({ world }: WorldCardProps) {
  const isOnline = world.status === 'online'
  const statusLabel = isOnline ? 'Online' : 'Offline'
  const latencyLabel = world.latency === null ? '--' : `${world.latency} ms`

  return (
    <article className="world-card">
      <div
        className={`world-image world-image--${world.imageIndex} ${isOnline ? '' : 'world-image--offline'}`}
        role="img"
        aria-label={world.imageLabel}
      />
      <div className="world-content">
        <div className="world-heading">
          <h3>{world.name}</h3>
          <span className={`status status--${world.status}`}>
            <i />
            {statusLabel}
          </span>
        </div>
        <p className="world-description">{world.description}</p>
        <dl className="world-meta">
          <div>
            <dt>Versão</dt>
            <dd>{world.version}</dd>
          </div>
          <div>
            <dt>Jogadores</dt>
            <dd>{world.players} / {world.maxPlayers}</dd>
          </div>
          <div>
            <dt>Latência</dt>
            <dd>{latencyLabel}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
