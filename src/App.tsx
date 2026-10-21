function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink-900">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-3" href="#inicio" aria-label="MineTunnel Control Center">
            <span className="grid size-9 place-items-center rounded-md bg-ink-900 text-sm font-extrabold text-white">
              MT
            </span>
            <span>
              <strong className="block text-sm leading-tight">MineTunnel</strong>
              <span className="block text-xs text-ink-700">Control Center</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-700 md:flex" aria-label="Navegação principal">
            <a className="text-ink-900 underline decoration-mine-500 decoration-2 underline-offset-8" href="#mundos">
              Mundos
            </a>
            <a className="transition-colors hover:text-mine-700" href="#relays">
              Relays
            </a>
            <a className="transition-colors hover:text-mine-700" href="#sobre">
              Sobre
            </a>
          </nav>

          <button
            className="grid size-10 place-content-center gap-1.5 rounded-md border border-black/15 bg-white md:hidden"
            type="button"
            aria-label="Abrir menu"
          >
            <span className="block h-0.5 w-5 bg-ink-900" />
            <span className="block h-0.5 w-5 bg-ink-900" />
            <span className="block h-0.5 w-5 bg-ink-900" />
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="border-b border-black/10 bg-white">
          <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 md:py-10 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold uppercase text-mine-700">Rede comunitária</p>
                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                  Mundos compartilhados, conexão simplificada.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-7 text-ink-700">
                  Acompanhe os mundos publicados pelo MineTunnel e confira a saúde dos relays que mantêm cada rota disponível.
                </p>
              </div>

              <dl className="grid grid-cols-3 divide-x divide-black/10 border-y border-black/10 py-4 lg:min-w-[390px] lg:border lg:px-2">
                <div className="px-3 text-center">
                  <dt className="text-xs text-ink-700">Mundos</dt>
                  <dd className="mt-1 text-2xl font-extrabold">10</dd>
                </div>
                <div className="px-3 text-center">
                  <dt className="text-xs text-ink-700">Online</dt>
                  <dd className="mt-1 text-2xl font-extrabold text-mine-700">7</dd>
                </div>
                <div className="px-3 text-center">
                  <dt className="text-xs text-ink-700">Jogadores</dt>
                  <dd className="mt-1 text-2xl font-extrabold">44</dd>
                </div>
              </dl>
            </div>

            <div className="mt-8 grid gap-3 border-t border-black/10 pt-6 md:grid-cols-[minmax(0,1fr)_13rem]">
              <label>
                <span className="sr-only">Buscar mundo</span>
                <input
                  className="h-11 w-full rounded-md border border-black/15 bg-white px-4 text-sm outline-none transition focus:border-mine-600 focus:ring-2 focus:ring-mine-100"
                  type="search"
                  placeholder="Buscar por nome ou descrição"
                />
              </label>
              <label>
                <span className="sr-only">Filtrar por status</span>
                <select className="h-11 w-full rounded-md border border-black/15 bg-white px-4 text-sm font-semibold outline-none focus:border-mine-600 focus:ring-2 focus:ring-mine-100">
                  <option>Todos os status</option>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">
          <section id="mundos" aria-labelledby="mundos-titulo">
            <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase text-mine-700">Explorar</p>
                <h2 className="mt-1 text-2xl font-extrabold" id="mundos-titulo">Mundos disponíveis</h2>
              </div>
              <p className="text-sm text-ink-700">10 resultados</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
