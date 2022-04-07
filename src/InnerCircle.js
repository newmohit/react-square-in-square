import React from "react";

export default class InnerCircle extends React.Component {
  render() {
    return (
      <div
        id={this.props.name}
        onClick={this.props.handleClick}
        className={`inner ${this.props.isToggleOn ? "green" : "red"}`}
      >
        Inner
      </div>
    );
  }
}
