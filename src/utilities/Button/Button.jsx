import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  render() {
    return <button className={styles.button}>{this.props.text}</button>;
  }
}

export default Button;
