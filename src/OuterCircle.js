import React from "react";
import InnerCircle from "./InnerCircle";

export default class OuterCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInnerCircleToggleOn: true,
      isOuterCircleToggleOn: true
    };
  }

  handleOuterCircleClick = (e) => {
    this.setState((prevState) => ({
      isInnerCircleToggleOn: !prevState.isInnerCircleToggleOn
    }));
  };

  handleInnerCircleClick = (e) => {
    e.stopPropagation();
    this.setState((prevState) => ({
      isOuterCircleToggleOn: !prevState.isOuterCircleToggleOn
    }));
  };

  render() {
    return (
      <div
        id="outer"
        onClick={this.handleOuterCircleClick}
        className={`outer ${
          this.state.isOuterCircleToggleOn ? "green" : "red"
        }`}
      >
        Outer
        <InnerCircle
          name="inner"
          isToggleOn={this.state.isInnerCircleToggleOn}
          handleClick={this.handleInnerCircleClick}
        />
      </div>
    );
  }
}
