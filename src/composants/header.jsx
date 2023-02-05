import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../images/logo.svg';

import '../css/composants.css';


export default function Header(props) {

    const pos = props.pageId;

    const currentPage = "nav-elm nav-selected";
    const otherPages = "nav-elm";
    const baseUrl = '/projet-7/';
    const aboutUrl = baseUrl + 'about';
    let logoViewBox = "0 0 210 70";


    return <div className='header'>
        <Logo className='logo' viewBox={logoViewBox} />
        <nav className='nav'>
            <Link onClick={() => props.click(0)} className={pos === 0 ? currentPage : otherPages} to={baseUrl}>Accueil</Link>
            <Link onClick={() => props.click(1)} className={pos === 1 ? currentPage : otherPages} to={aboutUrl}>A propos</Link>
        </nav>
    </div>

}