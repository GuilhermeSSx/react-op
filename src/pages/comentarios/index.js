import React from "react";
import './styles.css';
import img_prof1 from "..//..//assets/prof1.png";
import img_prof2 from "..//..//assets/prof2.png";
import img_prof3 from "..//..//assets/prof3.png";
import img_prof4 from "..//..//assets/prof4.png";
import Footer from "../../components/footer";
import Header from "../../components/header/header";

function Comentarios(){
    return (
        <div>
            <Header />

            <h1 className="h1comment">Comentários</h1>

            <div className="comentarios">
                <div className="comment">
                    <img className="img-comment" alt="" src={img_prof1} />
                    <div className="comment-box">
                        <p className="name">John Doe:</p>
                        <p className="text">Este site é incrível! Eu realmente recomendo.</p>
                    </div>
                </div>
                <div className="comment">
                    <img className="img-comment" alt="" src={img_prof2} />
                    <div className="comment-box">
                        <p className="name">Jane Smith:</p>
                        <p className="text">Eu amei navegar neste site.</p>
                    </div>
                </div>
                <div className="comment">
                    <img className="img-comment" alt="" src={img_prof3} />
                    <div className="comment-box">
                        <p className="name">John Smith:</p>
                        <p className="text">Este site é incrível! Consegui encontrar exatamente
                            o que eu estava procurando em pouco tempo.</p>
                    </div>
                </div>     
                <div className="comment">
                    <img className="img-comment" alt="" src={img_prof4} />
                    <div className="comment-box">
                        <p className="name">Ana Carolina:</p>
                        <p className="text">O atendimento ao cliente neste site é de primeira qualidade. 
                            Qualquer problema que eu tive foi resolvido rapidamente e eu não poderia
                            estar mais feliz com minha compra.</p>
                    </div>
                </div>                 
            </div>

            <Footer />
        </div>
    )
}

export default Comentarios;