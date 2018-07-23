import React from "react";
import styles from "./styles.scss";
import ColourPicker from "./ColourPicker";
import LabelInput from "./LabelInput";

export default class LabelEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div className={styles.labelEditor}>
        <div className={styles.labelSwatch}>
          <span
            onClick={this.props.onAddClick}
            className={styles.label}
            style={{ backgroundColor: this.props.colour }}
          >
            {this.props.label}
          </span>
        </div>

        <div className={styles.colourSelect}>
          <LabelInput
            value={this.props.value}
            onChange={this.props.onLabelChange} /* note naming convention */
            clearChange={this.props.clearChange}
            onFocus={this.props.onFocus}
            onSubmit={this.props.onSubmit}
            type="text"
            placeholder={this.props.placeholder}
          />

          <ColourPicker
            color={this.props.colour}
            expand={() => this.setState({ expanded: !this.state.expanded })}
            expanded={this.state.expanded}
            onClick={this.props.onChange}
            onChange={this.props.onChange}
            onSwatchHover={this.props.onSwatchHover}
            presetColors={this.props.presetColors}
          />
        </div>
      </div>
    );
  }
}
