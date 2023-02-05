import React from 'react';

import '../css/composants.css';

export default function Host(props) {
    const host = props.host;
    const names = host.name.split(" ");
    const name = names[0] + "\n" + names[1];
    return <div className='host'>
        <p>{name}</p>
        <img src={host.picture} alt="User" />
    </div>
}