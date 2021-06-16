import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "बन्यजन्तु क्षति",
        },
        xaxis: {
          categories: [
            2011,
            2012,
            2013,
            2014,
            2015,
            2016,
            2017,
            2018,
            2019,
            2020,
            2021,
          ],
        },
      },
      series: [
        {
          name: "बन्यजन्तु उद्दार",
          data: [10, 40, 25, 50, 49, 80, 70, 91, 125, 135, 144],
        },
      ],
      series2: [
        {
          name: "बन्यजन्तु क्षति",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 124, 144],
        },
      ],

      chartOptions: {
        labels: ["सामुदायिक वन", "धर्मिक वन", "कबुलियती बन", "नीजि वन"],
      },
      series1: [23, 11, 54, 72],
      labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"],
    };
  }
  render() {
    return (
      <div className="bg-white rounded">
        <Row>
          <Col className="p-5">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <Chart
              options={this.state.options}
              series={this.state.series2}
              type="area"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="scatter"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <Chart
              options={this.state.chartOptions}
              series={this.state.series1}
              labels={this.state.labels}
              type="pie"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <Chart
              options={this.state.chartOptions}
              series={this.state.series1}
              type="donut"
              width={500}
              height={320}
            />
          </Col>

          <Col className="p-5">
            <Chart
              options={this.state.chartOptions}
              series={this.state.series1}
              type="radialBar"
              width={500}
              height={320}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
