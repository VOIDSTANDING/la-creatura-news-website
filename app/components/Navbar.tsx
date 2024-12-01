import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <img src='/La-Creatura-Times.png' height='85' width='463' alt="Le Pepe Times" />
        <div className="navbar-links">
          <Link href="/" className="navbar-footer-link">Лента</Link>
          <Link href="/submit" className="navbar-footer-link">Добавить</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
