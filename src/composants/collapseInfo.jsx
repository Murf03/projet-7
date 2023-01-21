import React, { createRef } from 'react';

import './composants.css';
import CollapseDown from "../images/collapse.svg";

export default class CollapseInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            messageHeight: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.messageRef = createRef();
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    componentDidMount() {
        const height = document.getElementById('collapseMsg').clientHeight;
        if (height != null && height > this.state.messageHeight) {
            this.setState(prevState => ({
                messageHeight: height,
            }));
        }
    }

    render() {
        const botBarHeight = this.state.messageHeight - 10 + "px";
        return <div className='collapse-info'>
            <div className='top-bar-ci'>
                <p>{this.props.title}</p>
                <button onClick={this.handleClick}>
                    <img className={this.state.isToggleOn ? 'collapse-btn' : 'collapsed-btn'} src={CollapseDown} alt='collapse btn' />
                </button>
            </div>
            <div style={{ height: this.state.isToggleOn ? botBarHeight : "0px" }} className={this.state.isToggleOn ? 'bot-bar-ci' : 'collapsed-info'}>
                <p id='collapseMsg'>{this.props.message}</p>
            </div>
        </div>
    }
}