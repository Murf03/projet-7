import React from 'react';

import './composants.css';
import BtnIcon from "../images/collapse.svg";


export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            last: props.nbImages - 1,
        };

        //this.handleClickRight = this.handleClickRight.bind(this);
    }

    handleClickRight(dir) {
        const last = this.state.last;
        const now = this.state.position;
        //Aller à gauche
        if (!dir) {
            if (now === 0) {
                this.setState(prevState => ({
                    position: last,
                }));
                return;
            }
            else {
                this.setState(prevState => ({
                    position: now - 1,
                }));
                return;
            }
        }
        //Aller à droite
        else {
            if (now === last) {
                this.setState(prevState => ({
                    position: 0,
                }));
                return;
            }
            else {
                this.setState(prevState => ({
                    position: now + 1,
                }));
                return;
            }
        }
    }

    // componentDidMount() {
    // }

    render() {
        const emptyDiv = (<div className='no-btn'></div>);
        const pictures = this.props.pictures;
        const btns = pictures.length > 1;
        return <div className='gallery'>
            {btns ? (<button className="gallery-prev" onClick={() => this.handleClickRight(false)}>
                <img src={BtnIcon} alt='Bouton : précédent' />
            </button>) : emptyDiv}
            <img className='gallery-display' src={pictures[this.state.position]} alt="Visuels de l'appartement" />
            <p className='indications'>{(this.state.position + 1) + "/" + pictures.length}</p>
            {btns ? (<button className="gallery-next" onClick={() => this.handleClickRight(true)}>
                <img src={BtnIcon} alt='Bouton : suivant' />
            </button>) : emptyDiv}
        </div>
    }
}