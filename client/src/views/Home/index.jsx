import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";

import "./Home.scss";
import { isEmpty, isNil } from "ramda";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series2: [
        {
          name: "बन्यजन्तु क्षति",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 124, 144],
        },
      ],

      chartOptions: {
        labels: [
          "सामुदायिक वन",
          "धर्मिक वन",
          "कबुलियती बन",
          "नीजि वन",
          "साझेदारी बन",
          "चक्ला बन",
          "राष्ट्रिय बन",
          "व्यबसायीक कबुलियती बन",
        ],
      },

      labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var bantypesList = [];
    var uddarList = [];
    var series1 = [];
    var options = {
      chart: {
        id: "बन्यजन्तु उद्दार",
      },
      xaxis: {
        categories: [],
      },
    };
    var series = [];
    let mitis = [];
    let sankhya = [];

    if (nextProps !== prevState) {
      bantypesList = nextProps.bantypesDataList.data.list[0];
      uddarList = nextProps.totalbanyajantuuddarDataList.data.list;

      series1 = [
        bantypesList.samudayikban,
        bantypesList.dharmikban,
        bantypesList.kabuliyatiban,
        bantypesList.nijiban,
        bantypesList.sajhedariban,
        bantypesList.chaklaban,
        bantypesList.rastriyaban,
        bantypesList.commercialban,
      ];
      if (!isNil(uddarList) && !isEmpty(uddarList)) {
        uddarList.map((uddar) => {
          mitis.push(uddar.miti);
          sankhya.push(uddar.sankhya);
        });
        options.xaxis.categories = mitis;

        series = [
          {
            name: "बन्यजन्तु उद्दार",
            data: sankhya,
          },
        ];
      }
    }

    return {
      bantypesList,
      series1,
      series,
      options,
    };
  }
  render() {
    return (
      <div className="home bg-white rounded card">
        <Row>
          <Col className="p-5">
            <span>
              आर्थिक बर्ष २०११ देखी २०२१ सम्मको बन्यजन्तु उद्दार विवरण
            </span>
            <Chart
              className=" chart pt-5"
              options={this.state.options}
              series={this.state.series}
              type="line"
              width={500}
              height={320}
            />
          </Col>
          <Col className="pt-5">
            <span>
              {" "}
              आर्थिक बर्ष २०११ देखी २०२१ सम्मको बन्यजन्तु क्षति विवरण{" "}
            </span>
            <Chart
              className=" chart pt-5"
              options={this.state.options}
              series={this.state.series2}
              type="area"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <span> बनका प्रकारहरु सम्बन्धी विवरण </span>
            <Chart
              className=" chart pt-5"
              options={this.state.chartOptions}
              series={this.state.series1}
              labels={this.state.labels}
              type="pie"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <span> बनका प्रकारहरु सम्बन्धी विवरण</span>
            <Chart
              className=" chart pt-5"
              options={this.state.chartOptions}
              series={this.state.series1}
              type="donut"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <span>
              {" "}
              आर्थिक बर्ष २०११ देखी २०२१ सम्मको बन्यजन्तु उद्दार विवरण
            </span>
            <Chart
              className=" chart pt-5"
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={500}
              height={320}
            />
          </Col>
          <Col className="p-5">
            <span>
              {" "}
              आर्थिक बर्ष २०११ देखी २०२१ सम्मको बन्यजन्तु उद्दार विवरण
            </span>
            <Chart
              className=" chart pt-5"
              options={this.state.options}
              series={this.state.series}
              type="scatter"
              width={500}
              height={320}
            />
          </Col>

          {/* <Col className="p-5">
          <span>बनका प्रकारहरु विवरण</span>
            <Chart
              options={this.state.chartOptions}
              series={this.state.series1}
              type="radialBar"
              width={500}
              height={320}
            />
          </Col> */}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bantypesDataList: state.bankaprakar.allbantypesData,
  totalbanyajantuuddarDataList:
    state.dwandabebasthapan.totalbanyajantuuddarData,
});

export default connect(mapStateToProps, null)(Home);
