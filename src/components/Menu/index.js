import React from 'react';
import Logo from '../../assets/img/Logo3.png'
import '../Menu/Menu.css'
import Button from '../Button'


const Menu = () => {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='Dimiflix logo' />
            </a>
            <Button as='a' className='ButtonLink' href='/'>
                Novo Vídeo
                </Button>

        </nav>

    )
}
export default Menu;