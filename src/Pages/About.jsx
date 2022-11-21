import React from 'react';
import BodyAbout from '../Components/BodyAbout';
import '../style/css/About.css';

const About = () => {
    return (
        <div className="About">
            <div className="aboutTitle">
                <div className="text">Sobre</div>
            </div>
            <div className="aboutContent">
                <div className="aboutContentLeft">
                    <img className="abouticon" src="Assets/images/about1c.jpg" alt="imagem de gato 1"/>
                    <img className="abouticon" src="Assets/images/about2c.jpg" alt="imagem de gato 2"/>
                    <img className="abouticon" src="Assets/images/about3d.jpg" alt="imagem de cachorro 3"/>
                    <img className="abouticon" src="Assets/images/about4d.jpg" alt="imagem de cachorro 4"/>
                </div>
                <BodyAbout/>
            </div>
        </div>
    );
};

export default About;