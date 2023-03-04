import React from "react";
import './styles.css';
import Header from '../..//components/header/header';
import Footer from "../../components/footer";

function Contato(){
    return (
        <body className="body-contact">
            <Header />
            <h1 className="h1contato">Entre em contato conosco</h1>
            <div className="contact-container">
                <form className="form-contato">
                    <h3 className="h3contato">Formulario de contato.</h3>
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name" />
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" />
                    <label for="message">Mensagem:</label>
                    <textarea id="message" name="message"></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <Footer />
        </body>
    )
}

export default Contato;