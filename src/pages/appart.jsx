import React from 'react';
import { useParams } from 'react-router-dom';
import "../composants/composants.css";
import ErrorPage from './errorPage';
import Gallery from '../composants/gallery';
import Tags from '../composants/tags';
import Title from '../composants/title';
import Stars from '../composants/stars';
import Host from '../composants/host';
import CollapseList from '../composants/collapseList';

const apparts = require('../logements/logements.json');

export default function Appart(props) {

    let idExist = false;
    let { id } = useParams();
    let getId = id.split(':');
    let realId = getId[1];
    let appart = null;

    // Récupérer l'appart grâce à l'id 
    for (let i = 0; i < apparts.length; i++) {
        if (apparts[i].id === realId) {
            idExist = true;
            appart = apparts[i];
            break;
        }
    }
    // console.log("idExist :" + idExist);

    // if (!idExist) {
    //     const toThrow = JSON.stringify(
    //         { message: "Page inconnue" },
    //         { status: 404 }
    //     );
    //     // console.log(toThrow);
    //     throw toThrow;
    // }

    return idExist ? <div className='appart'>
        <Gallery nbImages={appart.pictures.length} pictures={appart.pictures} />
        <div className='details'>
            <div className='left-top'>
                <Title title={appart.title} location={appart.location} />
                <Tags tags={appart.tags} id={appart.id} />
            </div>
            <div className='right-bottom'>
                <Host host={appart.host} />
                <Stars qtite={Number(appart.rating)} />
            </div>
        </div>
        <div className='collapse-desc'>
            <CollapseList title="Description" list={[appart.description]} />
            <CollapseList title="Equipements" list={appart.equipments} />
        </div>
    </div>
        : <ErrorPage />

}