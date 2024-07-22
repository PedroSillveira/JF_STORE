import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars,
  faSearch, 
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="nav">
          <div className='inner-content'>
            <h1 className='logo'>
              JF<span>STORE</span>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                  <Link to="/produtos">Produtos</Link>
                </li>
                <li>
                  <Link to="/contato">Contatos</Link>
                </li>
              </ul>
            </nav>
            <div className='navs-icon-container'>
              <div className='search-input-container'>
                <input type='search' placeholder='Procurando algo?' />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <button className='shopping-cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <div className='products-count'>0</div>
              </button>
              <button className='menu-button'>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
  )
}
