import React, { Component } from "react";
import D3Charts from "./D3Chart";

class ChartWrapper extends Component {
  componentDidMount() {
    new D3Charts(this.refs.chart);
  }
  render() {
    return <div ref="chart"></div>;
  }
}

export default ChartWrapper;
