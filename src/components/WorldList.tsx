import type { World } from '../types'
import { WorldCard } from './WorldCard'

type WorldListProps = {
  worlds: World[]
  isLoading: boolean
  error: string | null
  onRetry: () => void
}

const skeletonItems = Array.from({ length: 4 }, (_, index) => index)

export function WorldList({ worlds, isLoading, error, onRetry }: WorldListProps) {
  const resultLabel = worlds.length === 1 ? 'resultado' : 'resultados'

  return (
    <section id="mundos" aria-labelledby="mundos-titulo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Explorar</p>
          <h2 id="mundos-titulo">Mundos disponíveis</h2>
        </div>
        <p className="result-count" aria-live="polite">
          {isLoading ? 'Carregando...' : `${worlds.length} ${resultLabel}`}
        </p>
      </div>

      {isLoading ? (
        <div className="world-grid" aria-label="Carregando mundos" aria-busy="true">
          {skeletonItems.map((item) => (
            <article className="world-card world-card--skeleton" aria-hidden="true" key={item}>
              <div className="skeleton skeleton-image" />
              <div className="world-content">
                <span className="skeleton skeleton-title" />
                <span className="skeleton skeleton-line" />
                <span className="skeleton skeleton-line skeleton-line--short" />
                <span className="skeleton skeleton-meta" />
              </div>
            </article>
          ))}
        </div>
      ) : error ? (
        <div className="load-state load-state--error" role="alert">
          <strong>Não foi possível exibir os mundos.</strong>
          <p>{error}</p>
          <button type="button" onClick={onRetry}>Tentar novamente</button>
        </div>
      ) : worlds.length > 0 ? (
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
