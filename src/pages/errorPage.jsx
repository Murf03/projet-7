import React from 'react';
import { Link } from 'react-router-dom';


export default function ErrorPage(props) {

    const backHomeTxt = "Retourner sur la page d'accueil";
    const baseUrl = '/projet-7/';
    return <div className='error-page'>
        <p className='error-code'>404</p>
        <p className='error-msg'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className="go-back-home" to={baseUrl}>{backHomeTxt}</Link>
    </div>

}