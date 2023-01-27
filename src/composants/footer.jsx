import React from 'react';

import './composants.css';
import { ReactComponent as Logo } from '../logo.svg';

export default function Footer(props) {
    return <div className='footer'>
        <Logo fill='white' width={125} height={40} stroke='white' />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}