import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import drible from '../../../assets/drible.png';
import facebook from '../../../assets/facebook.png';
import google from '../../../assets/google.png';
import linkedin from '../../../assets/linkedin.png';
import twitter from '../../../assets/twitter.png';
import background1 from '../../../assets/fundo1.png';
import background2 from '../../../assets/fundo2.jpg';
import background3 from '../../../assets/fundo3.jpg';
import lupa from '../../../assets/lupa.png';

import './style.css';
import { useState } from 'react';

export default function DinamicContent() {
    const [buttons, setButtons] = useState([1, 0, 0]);
    const [background, setBackground] = useState(background1);

    const backgrounds = [background1, background2, background3];
    const classes = ["first-content-buttons-button-active", "first-content-buttons-button"];
    const [buttonStyle, setButtonStyle] = useState([classes[0], classes[1], classes[1]]);
    const style = {
        backgroundImage: `url(${background})`,
    };

    const [showContent, setShowContent] = useState(false);
    
    const [classeContent, setClasseContent] = useState('first-content-main');

    useEffect(()=>{
        setClasseContent('none');
        if (!showContent) {
            setClasseContent('first-content-main');
        }
    }, [classeContent ,showContent]);
    

    function handleButton(button) {
        //console.log(button);
        setBackground(backgrounds[button]);
        let buttonStyleTemp = buttonStyle.map(function (p) {
            return p;
        });

        let buttonState = buttons.map(function (b, index) {
            if (index === button) {
                buttonStyleTemp[index] = classes[0];
                return 1;
            }
            buttonStyleTemp[index] = classes[1];
            return 0;
        });
        //console.log(buttonState);
        //console.log(buttonStyleTemp);

        setButtons(buttonState);
        setButtonStyle(buttonStyleTemp);
    }

       const buttonsLayout = (
           <div>
                {buttons.map((value, index)=> {
                    return <button 
                    onClick={() => { handleButton(index) }} 
                    className={buttonStyle[index]}
                    key={index}>
                    </button>
                })}           
           </div>
       ); 


    return (
        <Fragment>
            <div className="first-content" style={style}>
                <div className="container">
                <div className="menu">
                    <div className="menu-icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={google} alt="" />
                        <img src={drible} alt="" />
                        <img src={linkedin} alt="" />

                    </div>
                    
                    <img className="logo" src="" alt="LOGOMARCA" />

                    <input type="checkbox" id="bt-menu" />
                    <label onClick={()=> {setShowContent(!showContent)}} className="button-menu" htmlFor="bt-menu"> &#9776;</label>

                    <nav className="menu-nav">
                        <ul>
                            <li><Link to="/"><div>HOME</div></Link></li>
                            <li><Link to="/"><div>PAGES</div></Link></li>
                            <li><Link to="/"><div>PORTFOLIO</div></Link></li>
                            <li><Link to="/"><div>BLOG</div></Link></li>
                            <li><Link to="/"><div>CONTACT</div></Link></li>
                            <li><Link to="/"><div><img src={lupa} alt="Lupa" /></div></Link></li>
                        </ul>
                    </nav>
                    </div>
                    
                    
                    <div className={classeContent}>
                    <div className="first-content-text">
                        <h1>YOUR <span>SERVICE</span> READY TO LAUNCH</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, veniam debitis. Omnis quam dolores explicabo odit assumenda consequuntur delectus deserunt recusandae neque libero, impedit quos voluptate numquam sapiente perferendis qui!</p>
                        <button>SEE OUR WORK</button>
                    </div>

                    <div className="first-content-buttons">
                        {buttonsLayout}
                    </div>
                </div>
                </div>

                
            </div>
        </Fragment>
    );
}
