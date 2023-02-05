import React from 'react';

import '../css/composants.css';
import { ReactComponent as Logo } from '../images/logo.svg';

export default function Footer(props) {
    let logoViewBox = "0 0 210 70";
    return <div className='footer'>
        <Logo viewBox={logoViewBox} fill='white' width={120} height={40} stroke='white' />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}