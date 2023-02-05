import React from 'react';
import Tag from './tag';

import '../css/composants.css';

export default function Tags(props) {
    const tags = (<div className='tags'>{
        props.tags.map(e =>
            <Tag key={props.id + "-tag-" + e} title={e} />
        )
    }</div>);
    return tags;
}