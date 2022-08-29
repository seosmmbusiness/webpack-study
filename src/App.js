import React from "react";
import $ from "jquery";

export default class App extends React.Component {
  componentDidMount() {
    // Use jQuery after the component did mount
    $("<h1 />")
      .text("Hello World from jQury")
      .css({
        textAlign: "center",
        fontSize: "2em",
      })
      .addClass("head")
      .appendTo($("header"));
    $("<p />")
      .text("It was injected in React. Don't ask why =)")
      .css({
        color: "black",
        paddingTop: "4px",
        textAlign: "center",
      })
      .addClass("head")
      .appendTo($("header"));
  }
  render() {
    return (
      <React.Fragment>
        <header></header>
        <hr />
        <div className="box">
          <h2 className="box-title">Webpack Study Course</h2>
          <p className="box-text">
            The project has some changes and was optimzied optimized for Webpack
            5 and React 18
          </p>
          <p className="box-text">
            It uses CSS, LESS, SASS, Babel, React and jQuery
          </p>
        </div>
      </React.Fragment>
    );
  }
}
