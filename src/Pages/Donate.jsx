import React from 'react';
import BannerDonate from '../Components/BannerDonate';
import BodyDonate from '../Components/BodyDonate'
import '../style/scss/Donate.scss';

const Donate = () => {
    return (
        <>
            <div className='Donate'>
                <div className='Donate_logo'>Doações</div>

            </div>
            <BannerDonate />
            <div className='Container'>
                <div className='stickers'>
                    <img className='gatinho' src="Assets/images/image2.png" alt="gatinho" />
                    <img className='cachorro' src="Assets/images/image3.png" alt="xorro" />
                    <img className='suspet' src="Assets/images/image4.png" alt="suspet" />
                </div>
                <BodyDonate />
            </div>

            <div className='Button'>
                <button className='DonateButton'>COLABORAR COM A CAUSA</button>
            </div>
        </>
    )
}

export default Donate;