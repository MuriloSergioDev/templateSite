import React, { Fragment } from 'react';
import './style.css';

import DinamicContent from './DinamicContent';
import SecondSection from './SecondSection';
import Footer from './Footer';
// import { Container } from './styles';


export default function Home() {

    return (
        <Fragment>
            <section>
                <DinamicContent />
            </section>
            <section>
                <SecondSection />
            </section>


            <footer>
                <Footer/>
            </footer>
        </Fragment>
    );
}
