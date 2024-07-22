import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css';
import '../components/header.css';

export default function Header() {
  return (
    <header>
        <div className='inner-content'>
            <div className='left-side'>
                <h2>
                    Peças de qualidade com envio para todo Brasil! 
                </h2>
                <p>
                    alguma frase persuasiva e de impacto que instigue o usuário 
                </p>
                <Link to="/produtos" className='see-more-btn'>
                    <span>Ver Agora</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div className='right-side'>
                <img src="/images/header-image.png" alt='Produtcts' />
            </div>
        </div>
        </header>
  )
}
