import React from "react";
import './styles.css';
import video_trailer from '../../assets/video.mp4';

function Trailer(){
    return (
        <div id="trailer-container">
            <div className="content">
                <video controls className="trailer">
                    <source src={video_trailer}/>
                    Seu navegador não possui suporte para videos.
                </video>
                <div id='sinopse'>
                    <h1>Sinopse</h1>
                    <p className="description">
                    Em One Piece, conhecemos as aventuras de Monkey D. Luffy
                    e sua equipe de piratas, navegando por oceanos fantásticos
                    e ilhas exóticas em busca do maior tesouro já deixado pelo
                    lendário Gold Roger. Luffy acredita na lenda do tesouro e sai
                    em uma busca extraordinária na esperança de proclamar para si
                    o título de Rei dos Piratas.
                    </p>
                    <button className="button">Comprar ingresso</button>
                </div>
            </div>

        </div>
    )
}

export default Trailer;