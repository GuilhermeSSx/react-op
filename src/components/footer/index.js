import React from "react";
import './styles.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer>
            <img style={{objectFit: "contain"}} id="logo" alt="" src={logo} />
            <span className="spanfooter">Todos os Direitos Reservados ©</span>
            <span className="spanfooter">Desenvolvido por: Guilherme Dos Santos Silva</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{textDecoration: 'none'}} to='/'><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/elenco'><li>Elenco</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'><li>Comentarios</li></Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'><li>Contato</li></Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;