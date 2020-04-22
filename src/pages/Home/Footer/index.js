import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import './style.css';

import lupa from '../../../assets/lupa.png';
import drible from '../../../assets/drible.png';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import linkedin from '../../../assets/linkedin.png';
import twitter from '../../../assets/twitter.png';

export default function Footer() {
    return (
        <Fragment>
        <div className="container-footer">
            <nav className="menu-footer">
                <ul>
                    <li><Link to="/"><div>HOME</div></Link></li>
                    <li><Link to="/"><div>PAGES</div></Link></li>
                    <li><Link to="/"><div>PORTFOLIO</div></Link></li>
                    <li><Link to="/"><div>BLOG</div></Link></li>
                    <li><Link to="/"><div>CONTACT</div></Link></li>
                    <li><Link to="/"><div><img src={lupa} alt="Lupa" /></div></Link></li>
                </ul>
            </nav>

            <div className="menu-icons">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={google} alt="" />
                <img src={drible} alt="" />
                <img src={linkedin} alt="" />

            </div>

            <p>Copyrights free-psd-template.com</p>
            </div>
        </Fragment>
    );
}
