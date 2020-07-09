import React, { Component } from "react";
import styles from "./TicketCatStageThree.module.scss";
import Checkout from "../../../utilities/Checkout";

class TicketCatStageThree extends Component {
  state = {};
  render() {
    return (
      <div className={styles.stageThree}>
        <Checkout />
      </div>
    );
  }
}

export default TicketCatStageThree;
