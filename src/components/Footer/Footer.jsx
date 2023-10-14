import React from 'react'
import '../../components/Footer/Footer.css'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='footer__flex--container'>
                <div className='footer--info'>
                    <h3>About Us</h3>
                    <ul className='footer--ul'>
                        <li>Fake Street 123</li>
                        <li>Your favorites</li>
                        <li>Since 98'</li>
                    </ul>
                </div>
                <div className='footer--info'>
                    <h3>Socials</h3>
                    <div className='socials'>
                        <a href="https://github.com/FedeDalDegan" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/pixel-social-media-2/16/Instagram-512.png" alt="" className='footer-socials' /></a>
                        <a href="https://github.com/FedeDalDegan" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/pixel-social-media-2/16/Facebook-512.png" alt="" className='footer-socials' /></a>
                        <a href="https://github.com/FedeDalDegan" target="_blank"><img src="https://dinopixel.com/preload/0820/tiktok.png" alt="" className='footer-socials'/></a>
                    </div>
                </div>
                <div className='footer--info'>
                    <h3>Contact</h3>
                    <ul className='footer--ul'>
                        <li>Fake Street 123</li>
                        <li>12 3456-7890</li>
                        <li>New York</li>
                    </ul>
                </div>
            </div>
            <div className='sponsors'>
                <h3>Sponsors</h3>
                <div className='sponsor__img--container'>
                <img src="https://cdn1.iconfinder.com/data/icons/classes-and-magic-abilities-fantasy-game/600/lion_wild_animal_wildlife_jungle_danger_predator_forest-256.png" alt="" className='sponsor-img-rotate'/>
                    <img src="https://cdn4.iconfinder.com/data/icons/miu-social/60/steam-social-media-256.png" alt="" className='sponsor-img'/>
                    <img src="https://cdn4.iconfinder.com/data/icons/miu-social/60/steam-social-media-256.png" alt="" className='sponsor-img'/>
                    <img src="https://cdn1.iconfinder.com/data/icons/classes-and-magic-abilities-fantasy-game/600/lion_wild_animal_wildlife_jungle_danger_predator_forest-256.png" alt="" className='sponsor-img'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
