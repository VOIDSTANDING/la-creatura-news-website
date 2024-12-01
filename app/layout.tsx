import React from 'react';
import './globals.css';
import Navbar from './components/Navbar'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>La Creatura Times</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <header className="header">
          <Navbar />
        </header>
        <main className="container main-content">
          {children}
        </main>
        <footer className="footer">
          <p>(C) 2024 Я</p>
          <a className='navbar-footer-link' href='/about'>О сайте</a>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
