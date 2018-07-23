import React from "react";
import { ReactDOM, render, findDOMNode } from "react-dom";
import onClickOutside from "react-onclickoutside";
import colors from "./utils/colors";
import { uniq } from "lodash";

import LabelEditor from "./components/LabelEditor";

import styles from "./styles.scss";

/* This is a demo component bringing together the
   Color picker and label components as an example */

class DummyMarker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      colour: props.colour,
      value: "",
      placeholder: "Add Label"
    };

    this.onKeydown = this.onKeydown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClickOutside(event) {
    this.setState({
      visible: false
    });
  }

  onKeydown(e) {
    if (e.keyCode === 27) {
      // escape key maps to keycode `27`
      this.setState({
        visible: false
      });
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onKeydown, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeydown, false);
  }

  /* Label functions */

  handleFocus(event) {
    if (this.state.value.length != -1) {
      this.setState({ placeholder: "" });
    }
  }

  handleChange(event) {
    if (event.target.value.length > -1) {
      this.setState({ value: event.target.value });
      console.log(this.state.value);
    }
  }

  handleClear(event) {
    this.setState({ value: "", placeholder: "Add Label" });
    event.preventDefault();
    console.log(this.state.value);
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    this.setState({
      visible: false
    });
    event.preventDefault();
  }

  onAddClick() {
    this.setState({
      visible: !this.state.visible
    });
  }

  onChange(color, event) {
    this.setState({ colour: color.hex });
  }

  render() {
    const { presetColors, label } = this.props;
    const { colour, value, placeholder, visible } = this.state;

    return (
      <div style={{ position: "relative" }}>
        <div className={styles.marker}>
          <div
            onClick={this.onAddClick}
            className={styles.label}
            style={{ backgroundColor: colour }}
          >
            {label}
          </div>
          <div className={styles.markerBody}>
            <span>corticosteroid?, mometas+, budeso+</span>
          </div>
        </div>
        {visible ? (
          <LabelEditor
            presetColors={presetColors}
            onChange={this.onChange}
            label={label}
            colour={colour}
            visible={visible}
            onAddClick={this.onAddClick}
            value={value}
            onLabelChange={this.handleChange} /* note naming convention */
            clearChange={this.handleClear}
            onFocus={this.handleFocus}
            onSubmit={this.handleSubmit}
            type="text"
            placeholder={placeholder}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

// HOC for onclickoutside DummyMarker
const MarkerWrapper = onClickOutside(DummyMarker);

class App extends React.Component {
  render() {
    const presetColors = Object.values(colors);

    const demoColors = {
      A: "#ffde86",
      B: "#fbc7c5",
      C: "#b9e4e0",
      D: "#b4e5fa"
    };

    const { onAddClick } = this.props;

    return (
      <div>
        <h1>Colour Picker Component Demo</h1>
        <p>
          Specification:{" "}
          <a href="https://zpl.io/V0EWPlK">https://zpl.io/V0EWPlK</a>
        </p>
        <br />
        <MarkerWrapper
          presetColors={presetColors}
          colour={demoColors.A}
          label={"A"}
        />
        <MarkerWrapper
          presetColors={presetColors}
          colour={demoColors.B}
          label={"B"}
        />
        <MarkerWrapper
          presetColors={presetColors}
          colour={demoColors.C}
          label={"C"}
        />
        <MarkerWrapper
          presetColors={presetColors}
          colour={demoColors.D}
          label={"D"}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
