import React from 'react';
import Logo from '../../assets/img/Logo3.png'
import '../Menu/Menu.css'

const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Dimiflix logo' />
            </a>
            <a className='ButtonLink' href='/'>Novo Vídeo</a>

        </nav>

    )
}
export default Menu;