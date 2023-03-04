import React from "react";
import './styles.css';
import Header from "../../components/header/header";
import img_luffy from '../../assets/luffy.jpg'
import img_zoro from '../../assets/zoro.jpg'
import img_nami from '../../assets/nami.png'
import Footer from "../../components/footer";

function Elenco(){
    return (
        <div>
            <Header />
            <section className="elenco-cards">
                <div className="card-e">
                    <div className="elenco-nome-img">
                        <span className="nome-elenco">Monkey D. Luffy</span>
                        <img className="img-elenco" alt="" src={img_luffy} />
                    </div>
                    <p className="description-elenco">
                    Luffy é o capitão dos Piratas do Chapéu de Palha.
                    Quando criança, ele comeu uma Gomu Gomu no Mi, uma
                    fruta que lhe deu o poder do homem-borracha em troca
                    de sua habilidade de nadar. Filho de Monkey D. Dragon,
                    o jovem sonha em se tornar o Rei dos Piratas, título que
                    ninguém ocupa desde a execução de Gol D.
                    </p>
                </div>

                <div className="card-e">
                    <div className="elenco-nome-img">
                        <span className="nome-elenco">Roronoa Zoro</span>
                        <img className="img-elenco" alt="" src={img_zoro} />
                    </div>
                    <p className="description-elenco">
                    Roronoa Zoro, também conhecido como O Caçador de Piratas,
                    é um pirata e ex-Caçador de Recompensas, e também um espadachim
                    que usa 3 espadas. Ele foi o primeiro membro a se juntar aos Piratas
                    do Chapéu de Palha, e até o momento, é considerado a maior ameaça e
                    membro mais perigoso depois de Luffy e o imediato do bando.
                    </p>
                </div>

                <div className="card-e">
                    <div className="elenco-nome-img">
                        <span className="nome-elenco">Nami</span>
                        <img className="img-elenco" alt="" src={img_nami} />
                    </div>
                    <p className="description-elenco">
                    Nami é uma órfã de guerra de uma aldeia desconhecida, encontrada
                    por Bell-mère, uma mulher da Marinha, num campo de batalha hostil
                    quando ainda era um bebê. A marinheira adotou ela e Nojiko, outro órfã.
                    As três se tornaram tão próximos quanto uma família real.
                    </p>
                </div>
            </section>

            <div>hover over me</div>

            <Footer />
        </div>
    )
}

export default Elenco;