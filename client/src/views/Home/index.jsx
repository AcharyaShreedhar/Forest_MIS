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
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    var bantypesList = [];
    var uddarList = [];
    var xetiList = [];
    var series1 = [];
    var uddaroptions = {
      chart: {
        id: "बन्यजन्तु उद्दार",
      },
      xaxis: {
        uddarcategories: [],
        xeticategories: [],
      },
    };
    var xetioptions = {
      chart: {
        id: "बन्यजन्तु उद्दार",
      },
      xaxis: {
        uddarcategories: [],
        xeticategories: [],
      },
    };
    let uddarseries = [];
    let uddarmitis = [];
    let uddarsankhya = [];
    let xetimitis = [];
    let xetisankhya = [];
    let xetiseries = [];

    if (nextProps !== prevState) {
      bantypesList = nextProps.bantypesDataList.data.list[0];
      uddarList = nextProps.totalbanyajantuuddarDataList.data.list;
      xetiList = nextProps.totalbanyajantuxetiDataList.data.list;

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
          uddarmitis.push(uddar.miti);
          uddarsankhya.push(uddar.sankhya);
        });
        uddaroptions.xaxis.uddarcategories = uddarmitis;

        uddarseries = [
          {
            name: "बन्यजन्तु उद्दार",
            data: uddarsankhya,
          },
        ];
      }
      if (!isNil(xetiList) && !isEmpty(xetiList)) {
        xetiList.map((xeti) => {
          xetimitis.push(xeti.miti);
          xetisankhya.push(xeti.sankhya);
        });
        xetioptions.xaxis.xeticategories = xetimitis;

        xetiseries = [
          {
            name: "बन्यजन्तु क्षति",
            data: xetisankhya,
          },
        ];
      }
    }

    return {
      bantypesList,
      series1,
      uddarseries,
      uddaroptions,
      xetioptions,
      xetiseries,
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
              options={this.state.uddaroptions}
              series={this.state.uddarseries}
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
              options={this.state.xetioptions}
              series={this.state.xetiseries}
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
              options={this.state.uddaroptions}
              series={this.state.uddarseries}
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
              options={this.state.uddaroptions}
              series={this.state.uddarseries}
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
  totalbanyajantuxetiDataList: state.dwandabebasthapan.totalbanyajantuxetiData,
});

export default connect(mapStateToProps, null)(Home);
