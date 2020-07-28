import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo3.png'
import '../Menu/Menu.css'
import Button from '../Button'


const Menu = () => {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Dimiflix logo' />
            </Link>
            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo Vídeo
                </Button>

        </nav>

    )
}
export default Menu;