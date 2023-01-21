import React from 'react';

import logo from '../logo.svg';

import './composants.css';

function NavEl(infos) {
    return <a className='nav-elm' href={infos.link}>{infos.name}</a>
}

export default function Header(props) {

    return <div className='header'>
        <img className='logo' src={logo} alt="Logo entreprise" />
        <div className='nav'>
            <NavEl name="Accueil" link="google.com" />
            <NavEl name="A propos" link="google.com" />
        </div>
    </div>
}