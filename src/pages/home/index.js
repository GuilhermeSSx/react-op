import React from "react";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Trailer from "../../components/trailer/trailer";
import './styles.css';

function Home(){
    return (
        <>
            <Header />
            <div id='banner'>One Piece</div>
            <Trailer />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;