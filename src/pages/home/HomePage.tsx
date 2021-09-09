import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <Fragment>
            <div className='header homePage'>
                <img className='logo' src='./logo.svg' alt='CodeBox Logo' />
            </div>
            <div className='body homePage'>
                <div className='content'>
                    <h1 className='title'>
                        Bienvenido a CodeBox, tu editor de código online!
                    </h1>
                    <h2 className='subtitle'>
                        Aquí podrás experimentar con código HTML, CSS y JavaScript.
                    </h2>
                    <Link className='link' to='/editor'>
                        <button className='button cta'>Ir al editor</button>
                    </Link>
                    <h3 className='info'>
                        creado por <b>Luciano Aieta</b>
                    </h3>
                </div>
                <img className='image' src='./woman.svg' alt='Woman with Laptop' />
            </div>
        </Fragment>
    );
}

export default HomePage;
