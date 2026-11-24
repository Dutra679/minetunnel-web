export function Header() {
  return (
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
  )
}
