import React from 'react';


import { ReactComponent as Logo } from '../images/star.svg';

import '../css/composants.css';

export default function Stars(props) {
    const emptyStar = "#E3E3E3";
    const fullStar = "#FF6060";

    return <div className='stars'>
        <Logo className='star' fill={props.qtite > 0 ? fullStar : emptyStar} stroke={props.qtite > 0 ? fullStar : emptyStar} />
        <Logo className='star' fill={props.qtite > 1 ? fullStar : emptyStar} stroke={props.qtite > 1 ? fullStar : emptyStar} />
        <Logo className='star' fill={props.qtite > 2 ? fullStar : emptyStar} stroke={props.qtite > 2 ? fullStar : emptyStar} />
        <Logo className='star' fill={props.qtite > 3 ? fullStar : emptyStar} stroke={props.qtite > 3 ? fullStar : emptyStar} />
        <Logo className='star' fill={props.qtite > 4 ? fullStar : emptyStar} stroke={props.qtite > 4 ? fullStar : emptyStar} />
    </div>
}