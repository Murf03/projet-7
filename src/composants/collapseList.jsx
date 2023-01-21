import React from 'react';

import './composants.css';
import CollapseDown from "../images/collapse.svg";

export default class CollapseList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const nl = "\n";
        const botBarHeight = (this.props.list.length * 20) + 30 + "px";
        let botBar = (<div style={{ height: this.state.isToggleOn ? botBarHeight : "0px" }} className={this.state.isToggleOn ? 'bot-bar-cl' : 'collapsed-list'}>{this.props.list.map(e =>
            <p key={e} style={{ height: this.state.isToggleOn ? "20px" : "0px" }}>{e + " " + nl}</p>
        )}</div>);
        return <div className="collapse-list">
            <div className='top-bar-cl'>
                <p>{this.props.title}</p>
                <button onClick={this.handleClick}>
                    <img className={this.state.isToggleOn ? 'collapse-btn' : 'collapsed-btn'} src={CollapseDown} alt='collapse btn' />
                </button>
            </div>
            {botBar}
        </div>
    }
}