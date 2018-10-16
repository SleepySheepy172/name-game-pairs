import React from "react";
import CardLayout from "./CardLayout";

export default class Intro extends React.Component {
  state = {
    started: false
  };
  startOnClick = () => {};
  render() {
    return (
      <React.Fragment>
        <h1>Pelmanism: Name Game Style</h1>
        <p>
          See how well you remember everyones "fun facts" from the name game way
          back in week. Match the github username and image to the fun fact to
          make a pair.
        </p>
        <button>Start</button>
        <CardLayout />
      </React.Fragment>
    );
  }
}
