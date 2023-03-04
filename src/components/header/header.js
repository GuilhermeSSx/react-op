import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/logo.png';

function Header(){
    return (
        <header>
            <Link to='/'><img id='logo' alt="" src={Logo} /></Link>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/elenco'><li>Elenco</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'><li>Comentarios</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'><li>Contato</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;