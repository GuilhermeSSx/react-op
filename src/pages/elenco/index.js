import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import img_elenco from '../../assets/teste.png'
import Footer from "../../components/footer";

function Elenco(){
    return (
        <div>
            <Header />
            <section className="elenco-cards">
                <div className="card-e">
                    <div className="elenco-nome-img">
                        <span className="nome-elenco">Son Goku</span>
                        <img className="img-elenco" alt="" src={img_elenco} />
                    </div>
                    <p className="description-elenco">
                        Goku (孫 悟空, Son Gokū, ou Son Goku), nascido Kakarotto (カカロット, Kakarotto)
                        é o protagonista das franquias Dragon Ball. Ele é neto adotivo de Vovô Gohan, filho
                        de Bardock e Gine, o irmão mais novo de Raditz, o marido de Chichi, pai de Gohan e Goten,
                        avô de Pan e mais tarde tataravô de Goku Jr. Sua primeira aparição ocorreu em 1984, no primeiro
                        capítulo do mangá Dragon Ball, publicado na revista Weekly Shōnen Jump. Goku é inspirado em Sun Wukong,
                        personagem do romance Jornada ao Oeste. Porém, Toriyama mudou algumas de suas características para ser mais original.
                        Goku é apresentado como um menino estranho com rabo de macaco e força sobre-humana.
                    </p>
                </div>

                <div className="card-e">
                    <div className="elenco-nome-img">
                        <span className="nome-elenco">Vegeta</span>
                        <img className="img-elenco" alt="" src={img_elenco} />
                    </div>
                    <p className="description-elenco">
                        Vegeta IV, ou Príncipe Vegeta é o príncipe da raça Saiyajin e arqui-rival de Goku. Ele é o filho mais velho de Vegeta III,
                        o irmão mais velho de Tarble, o marido de Bulma, o pai de Trunks e Bra, e tataravô de Vegeta Jr. Junto com Goku, Gohan, e
                        Piccolo, ele é facilmente um dos personagens mais prominentes da série, recebendo mais desenvolvimento após ser introduzido
                        do que vários personagens.
                    </p>
                </div>

                <div className="card-e">
                    <div className="elenco-nome-img">
                        <span className="nome-elenco">Bulma</span>
                        <img className="img-elenco" alt="" src={img_elenco} />
                    </div>
                    <p className="description-elenco">
                        Bulma desempenha o papel de apoio ao protagonista Goku, no mangá Dragon Ball e nos animes Dragon Ball, Z, GT, e Super, filha do
                        Dr. Brief e Sra. Brief, ex-namorada de Yamcha, mais tarde se torna esposa de Vegeta e mãe de seus dois filhos Trunks e Bra. Bulma
                        é a personagem feminina mais importante da série, sendo responsável por duas invenções relevantes para o anime como o radar do dragão
                        e a Máquina do Tempo, e tendo participação contínua do primeiro episódio até o último
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Elenco;