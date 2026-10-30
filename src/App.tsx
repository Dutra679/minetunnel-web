import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="MineTunnel Control Center">
            <span className="brand-mark">MT</span>
            <span className="brand-copy">
              <strong>MineTunnel</strong>
              <small>Control Center</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            <a className="nav-link nav-link--active" href="#mundos">Mundos</a>
            <a className="nav-link" href="#relays">Relays</a>
            <a className="nav-link" href="#sobre">Sobre</a>
          </nav>

          <button className="menu-button" type="button" aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="inicio">
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
                  <dd>10</dd>
                </div>
                <div>
                  <dt>Online</dt>
                  <dd className="summary-online">7</dd>
                </div>
                <div>
                  <dt>Jogadores</dt>
                  <dd>44</dd>
                </div>
              </dl>
            </div>

            <div className="filters">
              <label>
                <span className="sr-only">Buscar mundo</span>
                <input type="search" placeholder="Buscar por nome ou descrição" />
              </label>
              <label>
                <span className="sr-only">Filtrar por status</span>
                <select defaultValue="todos">
                  <option value="todos">Todos os status</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <div className="container dashboard">
          <section id="mundos" aria-labelledby="mundos-titulo">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Explorar</p>
                <h2 id="mundos-titulo">Mundos disponíveis</h2>
              </div>
              <p className="result-count">10 resultados</p>
            </div>

            <div className="world-grid">
              <article className="world-card">
                <div className="world-image world-image--1" role="img" aria-label="Vale verde com montanhas e cachoeiras" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Vale Esmeralda</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Construções cooperativas entre vales, rios e montanhas.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>2 / 20</dd></div>
                    <div><dt>Latência</dt><dd>28 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--2" role="img" aria-label="Ilhas nevadas cercadas pelo oceano" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Ilhas do Norte</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Sobrevivência em arquipélagos gelados e rotas marítimas.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>3 / 20</dd></div>
                    <div><dt>Latência</dt><dd>31 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--3 world-image--offline" role="img" aria-label="Caverna profunda com cristais luminosos" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Caverna Central</h3>
                    <span className="status status--offline"><i />Offline</span>
                  </div>
                  <p className="world-description">Mineração técnica em uma rede de cavernas cristalinas.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>0 / 20</dd></div>
                    <div><dt>Latência</dt><dd>--</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--4" role="img" aria-label="Floresta antiga com grandes casas nas árvores" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Bosque Antigo</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Vilas suspensas e trilhas escondidas em uma mata ancestral.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>5 / 20</dd></div>
                    <div><dt>Latência</dt><dd>37 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--5" role="img" aria-label="Cidade portuária com muralhas e embarcações" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Cidade do Porto</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Comércio, navegação e grandes projetos na costa do mapa.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>6 / 20</dd></div>
                    <div><dt>Latência</dt><dd>40 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--6 world-image--offline" role="img" aria-label="Planície aberta com campos e pequenas vilas" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Horizonte Survival</h3>
                    <span className="status status--offline"><i />Offline</span>
                  </div>
                  <p className="world-description">Sobrevivência clássica em planícies amplas e produtivas.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>0 / 20</dd></div>
                    <div><dt>Latência</dt><dd>--</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--7" role="img" aria-label="Montanha vermelha com cânions e pontes" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Montanha Vermelha</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Exploração em cânions, minas profundas e terreno extremo.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>8 / 20</dd></div>
                    <div><dt>Latência</dt><dd>46 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--8" role="img" aria-label="Reino construído em ilhas flutuantes" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Reino das Nuvens</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Pontes aéreas conectam fortalezas acima das nuvens.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>9 / 20</dd></div>
                    <div><dt>Latência</dt><dd>49 ms</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--9 world-image--offline" role="img" aria-label="Vila medieval com ferrarias e oficinas" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Vila dos Ferreiros</h3>
                    <span className="status status--offline"><i />Offline</span>
                  </div>
                  <p className="world-description">Oficinas medievais, forjas coletivas e economia local.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>0 / 20</dd></div>
                    <div><dt>Latência</dt><dd>--</dd></div>
                  </dl>
                </div>
              </article>

              <article className="world-card">
                <div className="world-image world-image--10" role="img" aria-label="Acampamento de expedição no alto das montanhas" />
                <div className="world-content">
                  <div className="world-heading">
                    <h3>Expedição 27</h3>
                    <span className="status status--online"><i />Online</span>
                  </div>
                  <p className="world-description">Acampamento avançado para aventuras e descobertas em grupo.</p>
                  <dl className="world-meta">
                    <div><dt>Versão</dt><dd>1.21.1</dd></div>
                    <div><dt>Jogadores</dt><dd>11 / 20</dd></div>
                    <div><dt>Latência</dt><dd>55 ms</dd></div>
                  </dl>
                </div>
              </article>
            </div>
          </section>

          <section id="relays" aria-labelledby="relays-titulo">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Infraestrutura</p>
                <h2 id="relays-titulo">Rede de relays</h2>
              </div>
              <span className="active-relays"><i />3 ativos</span>
            </div>

            <div className="relay-grid">
              <article className="relay-card">
                <div className="relay-heading">
                  <div><p>Brasil, Sudeste</p><h3>São Paulo</h3></div>
                  <span>Operacional</span>
                </div>
                <dl className="relay-meta">
                  <div><dt>Latência média</dt><dd>12 ms</dd></div>
                  <div><dt>Capacidade</dt><dd>64%</dd></div>
                </dl>
                <div className="capacity" aria-label="Capacidade em 64 por cento"><span style={{ width: '64%' }} /></div>
              </article>

              <article className="relay-card">
                <div className="relay-heading">
                  <div><p>Chile, Central</p><h3>Santiago</h3></div>
                  <span>Operacional</span>
                </div>
                <dl className="relay-meta">
                  <div><dt>Latência média</dt><dd>48 ms</dd></div>
                  <div><dt>Capacidade</dt><dd>41%</dd></div>
                </dl>
                <div className="capacity" aria-label="Capacidade em 41 por cento"><span style={{ width: '41%' }} /></div>
              </article>

              <article className="relay-card">
                <div className="relay-heading">
                  <div><p>EUA, Leste</p><h3>Miami</h3></div>
                  <span>Operacional</span>
                </div>
                <dl className="relay-meta">
                  <div><dt>Latência média</dt><dd>112 ms</dd></div>
                  <div><dt>Capacidade</dt><dd>29%</dd></div>
                </dl>
                <div className="capacity" aria-label="Capacidade em 29 por cento"><span style={{ width: '29%' }} /></div>
              </article>
            </div>

            <p className="relay-note">
              Os relays encaminham as conexões sem hospedar os mundos. O progresso permanece no computador de quem abriu o túnel.
            </p>
          </section>
        </div>
      </main>

      <footer id="sobre" className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-title">MineTunnel Control Center</p>
            <p>Demonstração acadêmica de uma interface para túneis Minecraft.</p>
          </div>
          <small>Interface estática • Fase 2</small>
        </div>
      </footer>
    </div>
  )
}

export default App
