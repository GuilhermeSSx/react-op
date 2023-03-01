import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/elenco'><li>Elenco</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/myanimelistapi'><li>MyAnimeList API</li></Link>
                    <Link style={{textDecoration: 'none'}} to='contato'><li>Contato</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;