import React from "react"
import Logo from "./img/tuo-logo.png"

function Header() {

  function toggleMenu(){
    const menu = document.querySelector(".mobile-menu")
    menu.classList.toggle("show");
  }

  return (
    <div>
    <div className="header-div">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <header className="header">
        <div className="header-logo-name">
        <img src={Logo} alt="logo" className="logo"/>
        <h1>Shop Name</h1>
        </div>



        <div className="header-hamburger-menu">
        <div className="hamburger" onClick={toggleMenu}>☰</div>
        <nav className="mobile-menu">
        <ul>
        <li><button className="hamburger-button" onClick={toggleMenu}>Web page </button></li>
        <li><a href="https://x.com/lucasanniaxx" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
        <li><a href="mailto:tuoindirizzoemail@example.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a></li>
        </ul>
        </nav>
        </div>
       

        <navbar className="header-social">
        <a href="https://x.com/lucasanniaxx" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/lucasanniaa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a href="mailto:tuoindirizzoemail@example.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
        </navbar>
        

        </header>
     </div>
    </div>
  );
}

export default Header;
