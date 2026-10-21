import worldAtlas from './assets/world-atlas.png'

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

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '0% 0%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Vale verde com montanhas e cachoeiras"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Vale Esmeralda</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700">
                      <span className="size-1.5 rounded-full bg-mine-500" />Online
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Construções cooperativas entre vales, rios e montanhas.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">2 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">28 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '25% 0%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Ilhas nevadas cercadas pelo oceano"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Ilhas do Norte</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700"><span className="size-1.5 rounded-full bg-mine-500" />Online</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Sobrevivência em arquipélagos gelados e rotas marítimas.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">3 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">31 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center grayscale-[25%]"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '50% 0%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Caverna profunda com cristais luminosos"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Caverna Central</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-bold text-neutral-600"><span className="size-1.5 rounded-full bg-neutral-400" />Offline</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Mineração técnica em uma rede de cavernas cristalinas.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">0 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">--</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '75% 0%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Floresta antiga com grandes casas nas árvores"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Bosque Antigo</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700"><span className="size-1.5 rounded-full bg-mine-500" />Online</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Vilas suspensas e trilhas escondidas em uma mata ancestral.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">5 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">37 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '100% 0%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Cidade portuária com muralhas e embarcações"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Cidade do Porto</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700"><span className="size-1.5 rounded-full bg-mine-500" />Online</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Comércio, navegação e grandes projetos na costa do mapa.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">6 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">40 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center grayscale-[25%]"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '0% 100%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Planície aberta com campos e pequenas vilas"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Horizonte Survival</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-bold text-neutral-600"><span className="size-1.5 rounded-full bg-neutral-400" />Offline</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Sobrevivência clássica em planícies amplas e produtivas.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">0 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">--</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '25% 100%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Montanha vermelha com cânions e pontes"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Montanha Vermelha</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700"><span className="size-1.5 rounded-full bg-mine-500" />Online</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Exploração em cânions, minas profundas e terreno extremo.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">8 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">46 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '50% 100%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Reino construído em ilhas flutuantes"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Reino das Nuvens</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700"><span className="size-1.5 rounded-full bg-mine-500" />Online</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Pontes aéreas conectam fortalezas acima das nuvens.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">9 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">49 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center grayscale-[25%]"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '75% 100%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Vila medieval com ferrarias e oficinas"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Vila dos Ferreiros</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-100 px-2 py-1 text-[11px] font-bold text-neutral-600"><span className="size-1.5 rounded-full bg-neutral-400" />Offline</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Oficinas medievais, forjas coletivas e economia local.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">0 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">--</dd></div>
                  </dl>
                </div>
              </article>

              <article className="grid min-h-44 grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${worldAtlas})`, backgroundPosition: '100% 100%', backgroundSize: '500% 200%' }}
                  role="img"
                  aria-label="Acampamento de expedição no alto das montanhas"
                />
                <div className="flex min-w-0 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-extrabold leading-5">Expedição 27</h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-mine-50 px-2 py-1 text-[11px] font-bold text-mine-700"><span className="size-1.5 rounded-full bg-mine-500" />Online</span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-ink-700">Acampamento avançado para aventuras e descobertas em grupo.</p>
                  <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-black/10 pt-3 text-xs">
                    <div><dt className="text-ink-700">Versão</dt><dd className="mt-1 font-bold">1.21.1</dd></div>
                    <div><dt className="text-ink-700">Jogadores</dt><dd className="mt-1 font-bold">11 / 20</dd></div>
                    <div><dt className="text-ink-700">Latência</dt><dd className="mt-1 font-bold">55 ms</dd></div>
                  </dl>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
