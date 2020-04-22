import React, { Fragment } from 'react';
import './style.css';
// import { Container } from './styles';
import coluna1 from '../../../assets/coluna1.png';
import coluna2 from '../../../assets/coluna2.png';
import coluna3 from '../../../assets/coluna3.png';

export default function SecondSection() {
    return (
        <Fragment>
            <div className="container-section">
                <div className="blocks">
                    <div className="section-blocks">
                        <div className="blocks-text">
                            <div className="blocks-text-main">
                                <h4>CREATIVE IDEAS</h4>
                                <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.</p>
                            </div>
                            <h5>READ MORE</h5>

                        </div>
                        <img src={coluna1} alt="imgs" />
                    </div>

                    <div className="section-blocks">
                        <div className="blocks-text">
                            <div className="blocks-text-main">
                                <h4>CREATIVE IDEAS</h4>
                                <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.</p>
                            </div>
                            <h5>READ MORE</h5>

                        </div>
                        <img src={coluna2} alt="imgs" />
                    </div>

                    <div className="section-blocks">
                        <div className="blocks-text">
                            <div className="blocks-text-main">
                                <h4>CREATIVE IDEAS</h4>
                                <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.</p>
                            </div>
                            <h5>READ MORE</h5>

                        </div>
                        <img src={coluna3} alt="imgs" />
                    </div>
                </div>
                <div className="side-blocks">
                    <h2>A USER-FRIENDLY THEMES, BUILD WITH USABILITY
             IN MIND GREAT MODERN DESIGN AND UNIQUE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Expedita perferendis, dicta quidem accusantium
                    qui ipsum quis dignissimos assumenda nulla iusto
                    fugit eos omnis ipsa magni sint totam voluptates!
               Officia, veritatis!</p>
                    <button className="button-second">SEE OUR WORK</button>
                </div>
            </div>
        </Fragment>
    );
}
