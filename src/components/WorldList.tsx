import type { World } from '../types'
import { WorldCard } from './WorldCard'

type WorldListProps = {
  worlds: World[]
}

export function WorldList({ worlds }: WorldListProps) {
  const resultLabel = worlds.length === 1 ? 'resultado' : 'resultados'

  return (
    <section id="mundos" aria-labelledby="mundos-titulo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Explorar</p>
          <h2 id="mundos-titulo">Mundos disponíveis</h2>
        </div>
        <p className="result-count">{worlds.length} {resultLabel}</p>
      </div>

      {worlds.length > 0 ? (
        <div className="world-grid">
          {worlds.map((world) => (
            <WorldCard key={world.id} world={world} />
          ))}
        </div>
      ) : (
        <p className="empty-state">Nenhum mundo corresponde aos filtros selecionados.</p>
      )}
    </section>
  )
}
