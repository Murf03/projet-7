import React, { createRef } from "react";

import "../css/composants.css";
import CollapseDown from "../images/collapse.svg";

export default class CollapseList extends React.Component {
  constructor(props) {
    super(props);
    const isList = this.props.list.length > 1;
    this.state = {
      isToggleOn: false,
      isList: isList,
      messageHeight: 0,
    };

    this.pRef = createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  componentDidMount() {
    if (!this.state.isList) {
      const pHeight = this.pRef.current.clientHeight;
      if (pHeight != null && pHeight > this.state.messageHeight) {
        this.setState((prevState) => ({
          messageHeight: pHeight,
          isToggleOn: false,
        }));
      }
    }
  }

  render() {
    const nl = "\n";
    //List
    const isMobile = window.screen.width < 961 ? true : false;
    const pH = 20;
    const paddingToAdd = !isMobile ? pH + 5 : -25;
    const botBarHeight = this.props.list.length * pH + paddingToAdd + "px";
    let botBar = (
      <div
        style={{ height: this.state.isToggleOn ? botBarHeight : "0px" }}
        className={this.state.isToggleOn ? "bot-bar-cl" : "collapsed-list"}
      >
        {this.props.list.map((e) => (
          <p key={e} style={{ height: this.state.isToggleOn ? "20px" : "0px" }}>
            {e + " " + nl}
          </p>
        ))}
      </div>
    );

    //Not list
    const botBarHeightNotList = this.state.messageHeight - 5 + "px";
    let botBarNotList = (
      <div
        style={{ height: this.state.isToggleOn ? botBarHeightNotList : "0px" }}
        className={this.state.isToggleOn ? "bot-bar-cl" : "collapsed-list"}
      >
        <p ref={this.pRef}>{this.props.list[0]}</p>
      </div>
    );

    return (
      <div className="collapse-list">
        <div className="top-bar-cl">
          <p>{this.props.title}</p>
          <button onClick={this.handleClick}>
            <img
              className={
                this.state.isToggleOn ? "collapse-btn" : "collapsed-btn"
              }
              src={CollapseDown}
              alt="collapse btn"
            />
          </button>
        </div>
        {this.state.isList ? botBar : botBarNotList}
      </div>
    );
  }
}
