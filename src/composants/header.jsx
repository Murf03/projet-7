import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../logo.svg';

import './composants.css';


export default function Header(props) {

    const pos = props.pageId;

    const currentPage = "nav-elm nav-selected";
    const otherPages = "nav-elm";

    return <div className='header'>
        <Logo fill='#FF6060' width={210} height={60} stroke='#FF6060' />
        <nav className='nav'>
            <Link onClick={() => props.click(0)} className={pos === 0 ? currentPage : otherPages} to="/">Accueil</Link>
            <Link onClick={() => props.click(1)} className={pos === 1 ? currentPage : otherPages} to="/about">A propos</Link>
        </nav>
    </div>

}