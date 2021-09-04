import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import * as React from 'react';
import './Footer.scss';

type FooterProps = {
    text: string
}


export const Footer: React.FC<FooterProps> = ({text}) => {
    return (       
        <footer id="footer">
            <div id="copyright">
                <p id="copyright-text">Copyright &copy; 2021 by Dervla Hynes</p>
            </div>
            <div id="spacer"></div>
            <div id="icons">
                <a id="facebook" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a id="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a id="linkedin" href="#"><FontAwesomeIcon icon={faInstagram} /></a> 
            </div>
        </footer>
    )
}

Footer.displayName = "Footer";