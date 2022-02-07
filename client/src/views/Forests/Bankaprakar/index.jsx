import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { equals, isNil } from "ramda";
import {
  DharmikbanBibaran,
  Filter,
  KabuliyatibanBibaran,
  NijibanBibaran,
  SamudayikbanBibaran,
  SajhedaribanBibaran,
  ChaklabanBibaran,
  RastriyabanBibaran,
  CommercialbanBibaran,
  ConfirmationDialoge,
  UpabhoktasamuhaBibaran,
  ReportGenerator,
} from "../../../components";
import BankaprakarActions from "../../../actions/bankaprakar";
import {
  samudayikbanHeadings,
  dharmikbanHeadings,
  kabuliyatibanHeadings,
  nijibanHeadings,
  sajhedaribanHeadings,
  chaklabanHeadings,
  rastriyabanHeadings,
  commercialbanHeadings,
  upabhoktasamuhaHeadings,
  districtList,
} from "../../../services/config";
import "./Bankaprakar.scss";

class Bankaprakar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loc: "samudayiklist",
      fromDate: "2075-01-01",
      toDate: "2090-12-30",
      distId: "%",
      officeId: "%",
      perPage: 10,
      page: 0,
      showDialog: false,
      item: {},
      path: "samudayik",
    };
    this.fetchResults = this.fetchResults.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePer = this.handlePer.bind(this);
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePerCallback = this.handlePerCallback.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const loc = nextProps.location.pathname.split("/")[2];
    var samudayikbanList = [];
    var dharmikbanList = [];
    var kabuliyatibanList = [];
    var nijibanList = [];
    var sajhedaribanList = [];
    var chaklabanList = [];
    var rastriyabanList = [];
    var commercialbanList = [];
    var upabhoktasamuhaList = [];

    if (nextProps !== prevState) {
      samudayikbanList = nextProps.samudayikbanbibaranDataList.data;
      dharmikbanList = nextProps.dharmikbanbibaranDataList.data;
      nijibanList = nextProps.nijibanbibaranDataList.data;
      kabuliyatibanList = nextProps.kabuliyatibanbibaranDataList.data;
      sajhedaribanList = nextProps.sajhedaribanbibaranDataList.data;
      chaklabanList = nextProps.chaklabanbibaranDataList.data;
      rastriyabanList = nextProps.rastriyabanbibaranDataList.data;
      commercialbanList = nextProps.commercialbanbibaranDataList.data;
      upabhoktasamuhaList = nextProps.upabhoktasamuhabibaranDataList.data;
    }

    return {
      loc,
      samudayikbanList,
      dharmikbanList,
      nijibanList,
      kabuliyatibanList,
      sajhedaribanList,
      chaklabanList,
      rastriyabanList,
      commercialbanList,
      upabhoktasamuhaList,
    };
  }

  handlePer(e, item) {
    this.setState({ page: 0 }, ()=> this.handlePerCallback(e, item))
  }

  handlePerCallback(e, item) {
    const { fromDate, toDate, distId, officeId, page } = this.state;
    this.setState({ 
      perPage: e, 
    });
    this.fetchResults(fromDate, toDate, distId, officeId, page, e, item);
  }
  handleFromDate(e, item) {
    const { distId, officeId, perPage, toDate } = this.state;
    this.setState({ 
      fromDate: e,
      page: 0,
    });
    this.fetchResults(e, toDate, distId, officeId, 0, perPage, item);
  }

  handleToDate(e, item) {
    const { distId, officeId, perPage, fromDate } = this.state;
    this.setState({ 
      toDate: e,
      page: 0,
    });
    this.fetchResults(fromDate, e, distId, officeId, 0, perPage, item);
  }

  handleDistrict(e, item) {
    const { fromDate, officeId, perPage, toDate } = this.state;
    this.setState({ 
      distId: e,
      page: 0,
    });
    this.fetchResults(fromDate, toDate, e, officeId, 0, perPage, item);
  }

  fetchResults(fromDate, toDate, distId, officeId, page, perPage, item) {
    switch (item) {
      case "samudayikban": {
        this.props.fetchallSamudayikbanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "handover_date",
          page: page,
          perPage,
        });
        break;
      }
      case "dharmikban": {
        this.props.fetchallDharmikbanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "handover_date",
          page: page,
          perPage,
        });
        break;
      }
      case "kabuliyatiban": {
        this.props.fetchallKabuliyatibanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "entry_date",
          page: page,
          perPage,
        });
        break;
      }
      case "nijiban": {
        this.props.fetchallNijibanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "swikrit_miti",
          page: page,
          perPage,
        });
        break;
      }
      case "sajhedariban": {
        this.props.fetchallSajhedaribanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "darta_miti",
          page: page,
          perPage,
        });
        break;
      }
      case "chaklaban": {
        this.props.fetchallChaklabanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "darta_miti",
          page: page,
          perPage,
        });
        break;
      }
      case "rastriyaban": {
        this.props.fetchallRastriyabanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "darta_miti",
          page: page,
          perPage,
        });
        break;
      }

      case "commercialban": {
        this.props.fetchallCommercialbanbibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "darta_miti",
          page: page,
          perPage,
        });
        break;
      }

      case "upabhoktasamuha": {
        this.props.fetchallUpabhoktasamuhabibaran({
          fromDate,
          toDate,
          distId,
          officeId,
          name: "registration_date",
          page: page,
          perPage,
        });
        break;
      }
      default:
        break;
    }
  }

  handlePageChange(data, item) {
    const { fromDate, toDate, distId, officeId, perPage } = this.state;
    this.setState({ page: data.selected });
    this.fetchResults(
      fromDate,
      toDate,
      distId,
      officeId,
      data.selected * perPage,
      perPage,
      item
    );
  }

  handleSelectMenu(event, item, path) {
    this.setState({ item: item });
    this.setState({ path: path });
    const { page } = this.state
    switch (event) {
      case "edit": {
        switch (path) {
          case "samudayik": {
            this.props.history.push({
              pathname: `/forests/samudayikbanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "dharmik": {
            this.props.history.push({
              pathname: `/forests/dharmikbanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "kabuliyati": {
            this.props.history.push({
              pathname: `/forests/kabuliyatibanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "niji": {
            this.props.history.push({
              pathname: `/forests/nijibanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "sajhedari": {
            this.props.history.push({
              pathname: `/forests/sajhedaribanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "chakla": {
            this.props.history.push({
              pathname: `/forests/chaklabanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "rastriya": {
            this.props.history.push({
              pathname: `/forests/rastriyabanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "commercial": {
            this.props.history.push({
              pathname: `/forests/commercialbanedit/${item.darta_no}`,
              item,
            });
            break;
          }
          case "upabhoktasamuha": {
            this.props.history.push({
              pathname: `/forests/upabhoktasamuhaedit/${item.darta_no}`,
              item,
            });
            break;
          }

          default:
            break;
        }
        break;
      }
      case "delete": {
        switch (path) {
          case "samudayik": {
            this.setState({ messagebody: "सामुदायिक" });
            break;
          }
          case "dharmik": {
            this.setState({ messagebody: "धार्मिक" });
            break;
          }
          case "kabuliyati": {
            this.setState({ messagebody: "कवुलियती" });
            break;
          }
          case "niji": {
            this.setState({ messagebody: "निजि" });
            break;
          }
          case "sajhedari": {
            this.setState({ messagebody: "साझेदारी" });
            break;
          }
          case "chakla": {
            this.setState({ messagebody: "चक्ला" });
            break;
          }
          case "rastriya": {
            this.setState({ messagebody: "राष्ट्रिय" });
            break;
          }
          case "commercial": {
            this.setState({ messagebody: "व्यवसायीक कबुलियति" });
            break;
          }
          case "upabhoktasamuha": {
            this.setState({ messagebody: "उपभोक्ता समुह" });
            break;
          }
          default:
        }
        this.setState({ 
          showDialog: !this.state.showDialog,
        });
        break;
      }
      default:
        break;
    }
  }
  handleClose() {
    this.setState({ showDialog: !this.state.showDialog });
  }
  handleDelete() {
    const { item, path, page } = this.state;
    switch (path) {
      case "samudayik": {
        this.props.deleteSamudayikbanbibaran(item.darta_no);
        break;
      }
      case "dharmik": {
        this.props.deleteDharmikbanbibaran(item.darta_no);
        break;
      }
      case "kabuliyati": {
        this.props.deleteKabuliyatibanbibaran(item.darta_no);
        break;
      }
      case "niji": {
        this.props.deleteNijibanbibaran(item.darta_no);
        break;
      }
      case "sajhedari": {
        this.props.deleteSajhedaribanbibaran(item.darta_no);
        break;
      }
      case "chakla": {
        this.props.deleteChaklabanbibaran(item.darta_no);
        break;
      }
      case "rastriya": {
        this.props.deleteRastriyabanbibaran(item.darta_no);
        break;
      }
      case "commercial": {
        this.props.deleteCommercialbanbibaran(item.darta_no);
        break;
      }
      case "upabhoktasamuha": {
        this.props.deleteUpabhoktasamuhabibaran(item.darta_no);
        break;
      }
      default:
        break;
    }
    this.setState({ 
      showDialog: !this.state.showDialog,
      page: 0, 
      perPage: 10,
    });
  }

  handleAdd(item) {
    switch (item) {
      case "samudayikban": {
        this.props.history.push("/forests/samudayikbanadd/new");
        break;
      }
      case "kabuliyatiban": {
        this.props.history.push("/forests/kabuliyatibanadd/new");
        break;
      }
      case "dharmikban": {
        this.props.history.push("/forests/dharmikbanadd/new");
        break;
      }
      case "nijiban": {
        this.props.history.push("/forests/nijibanadd/new");
        break;
      }
      case "sajhedariban": {
        this.props.history.push("/forests/sajhedaribanadd/new");
        break;
      }
      case "chaklaban": {
        this.props.history.push("/forests/chaklabanadd/new");
        break;
      }
      case "rastriyaban": {
        this.props.history.push("/forests/rastriyabanadd/new");
        break;
      }
      case "commercialban": {
        this.props.history.push("/forests/commercialbanadd/new");
        break;
      }
      case "upabhoktasamuha": {
        this.props.history.push("/forests/upabhoktasamuhaadd/new");
        break;
      }

      default:
        break;
    }
  }
  render() {
    const {
      loc,
      perPage,
      samudayikbanList,
      dharmikbanList,
      kabuliyatibanList,
      nijibanList,
      sajhedaribanList,
      chaklabanList,
      rastriyabanList,
      commercialbanList,
      upabhoktasamuhaList,
      showDialog,
      messagebody,
    } = this.state;
    const { user, role } = this.props;
    return (
      <div>
        <ConfirmationDialoge
          showDialog={showDialog}
          title="Delete"
          body={
            "के तपाईँ " + `${messagebody}` + " वनको विवरण हटाउन चाहनुहुन्छ ?"
          }
          confirmLabel="चाहन्छु "
          cancelLabel="चाहंदिन "
          onYes={this.handleDelete}
          onClose={this.handleClose}
        />
        {equals(loc, "samudayikbanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="samudayikban"
                title="हस्तान्तरण मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="samudayikban"
                filename="सामुदायिक वन सम्बन्धी विवरण"
                sheet="सामुदायिक वन सम्बन्धी विवरण"
                className="dsl-b24"
              />
            </div>
            <SamudayikbanBibaran.List
              buttonName="+ सामुदायिक वन"
              title="सामुदायिक वन सम्बन्धी विवरण"
              pageCount={
                !isNil(samudayikbanList)
                  ? Math.ceil(samudayikbanList.total / perPage)
                  : 10
              }
              data={!isNil(samudayikbanList) ? samudayikbanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={samudayikbanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("samudayikban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "samudayikban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "samudayikbanadd") && (
          <SamudayikbanBibaran.Add
            title="+ सामुदायिक वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSamudayikbanbibaran(e)}
          />
        )}
        {equals(loc, "samudayikbanedit") && (
          <SamudayikbanBibaran.Edit
            title="सामुदायिक वन शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSamudayikbanbibaran(e, id)}
          />
        )}
        {equals(loc, "upabhoktasamuhalist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="upabhoktasamuha"
                title="दर्ता मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="upabhoktasamuha"
                filename="उपभोक्ता समुह सम्बन्धी विवरण"
                sheet="उपभोक्ता समुह सम्बन्धी विवरण"
              />
            </div>
            <UpabhoktasamuhaBibaran.List
              buttonName="+ उपभोक्ता समुह"
              title="उपभोक्ता समुह सम्बन्धी विवरण"
              pageCount={
                !isNil(upabhoktasamuhaList)
                  ? Math.ceil(upabhoktasamuhaList.total / perPage)
                  : 10
              }
              data={!isNil(upabhoktasamuhaList) ? upabhoktasamuhaList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={upabhoktasamuhaHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("upabhoktasamuha")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "upabhoktasamuha")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "upabhoktasamuhaadd") && (
          <UpabhoktasamuhaBibaran.Add
            title="+ उपभोक्ता समुह"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addUpabhoktasamuhabibaran(e)}
          />
        )}
        {equals(loc, "upabhoktasamuhaedit") && (
          <UpabhoktasamuhaBibaran.Edit
            title="उपभोक्ता समुह शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateUpabhoktasamuhabibaran(e, id)}
          />
        )}
        {equals(loc, "dharmikbanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="dharmikban"
                title="हस्तान्तरण मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="dharmikban"
                filename="धार्मिक बन सम्बन्धी विवरण"
                sheet="धार्मिक बन सम्बन्धी विवरण"
              />
            </div>
            <DharmikbanBibaran.List
              buttonName="+ धार्मिक बन "
              title="धार्मिक वन सम्बन्धी विवरण"
              pageCount={
                !isNil(dharmikbanList)
                  ? Math.ceil(dharmikbanList.total / perPage)
                  : 10
              }
              data={!isNil(dharmikbanList) ? dharmikbanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={dharmikbanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("dharmikban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "dharmikban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "dharmikbanadd") && (
          <DharmikbanBibaran.Add
            title="+ धार्मिक बन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addDharmikbanbibaran(e)}
          />
        )}
        {equals(loc, "dharmikbanedit") && (
          <DharmikbanBibaran.Edit
            title="धार्मिक बन शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateDharmikbanbibaran(e, id)}
          />
        )}
        {equals(loc, "kabuliyatibanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="kabuliyatiban"
                title="दर्ता मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="kabuliyatiban"
                filename="कवुलियती वन सम्बन्धी विवरण"
                sheet="कवुलियती वन सम्बन्धी विवरण"
              />
            </div>
            <KabuliyatibanBibaran.List
              buttonName="+ कवुलियती वन "
              title="कवुलियती वन सम्बन्धी विवरण"
              pageCount={
                !isNil(kabuliyatibanList)
                  ? Math.ceil(kabuliyatibanList.total / perPage)
                  : 10
              }
              data={!isNil(kabuliyatibanList) ? kabuliyatibanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={kabuliyatibanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("kabuliyatiban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "kabuliyatiban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "kabuliyatibanadd") && (
          <KabuliyatibanBibaran.Add
            title="+ कवुलियती वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addKabuliyatibanbibaran(e)}
          />
        )}
        {equals(loc, "kabuliyatibanedit") && (
          <KabuliyatibanBibaran.Edit
            title="कवुलियती वन शंसोधन"
            history={this.props.history}
            user={user}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateKabuliyatibanbibaran(e, id)}
          />
        )}
        {equals(loc, "nijibanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="nijiban"
                title="स्विकृत मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="nijiban"
                filename="निजि वन सम्बन्धी विवरण"
                sheet="निजि वन सम्बन्धी विवरण "
              />
            </div>
            <NijibanBibaran.List
              buttonName="+ निजि वन"
              title="निजि वन सम्बन्धी विवरण"
              pageCount={
                !isNil(nijibanList)
                  ? Math.ceil(nijibanList.total / perPage)
                  : 10
              }
              data={!isNil(nijibanList) ? nijibanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={nijibanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("nijiban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "nijiban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "nijibanadd") && (
          <NijibanBibaran.Add
            title="+ निजि वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addNijibanbibaran(e)}
          />
        )}
        {equals(loc, "nijibanedit") && (
          <NijibanBibaran.Edit
            title="निजि वन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateNijibanbibaran(e, id)}
          />
        )}
        {equals(loc, "sajhedaribanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="sajhedariban"
                title="दर्ता मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="sajhedariban"
                filename="साझेदारी वन सम्बन्धी विवरण"
                sheet="साझेदारी वन सम्बन्धी विवरण "
              />
            </div>
            <SajhedaribanBibaran.List
              buttonName="+ साझेदारी वन"
              title="साझेदारी वन सम्बन्धी विवरण"
              pageCount={
                !isNil(sajhedaribanList)
                  ? Math.ceil(sajhedaribanList.total / perPage)
                  : 10
              }
              data={!isNil(sajhedaribanList) ? sajhedaribanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={sajhedaribanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("sajhedariban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "sajhedariban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "sajhedaribanadd") && (
          <SajhedaribanBibaran.Add
            title="+ साझेदारी वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addSajhedaribanbibaran(e)}
          />
        )}
        {equals(loc, "sajhedaribanedit") && (
          <SajhedaribanBibaran.Edit
            title="साझेदारी वन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateSajhedaribanbibaran(e, id)}
          />
        )}
        {equals(loc, "chaklabanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="chaklaban"
                title="दर्ता मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="chaklaban"
                filename="चक्ला वन सम्बन्धी विवरण"
                sheet="चक्ला वन सम्बन्धी विवरण "
              />
            </div>
            <ChaklabanBibaran.List
              buttonName="+ चक्ला वन"
              title="चक्ला वन सम्बन्धी विवरण"
              pageCount={
                !isNil(chaklabanList)
                  ? Math.ceil(chaklabanList.total / perPage)
                  : 10
              }
              data={!isNil(chaklabanList) ? chaklabanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={chaklabanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("chaklaban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "chaklaban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "chaklabanadd") && (
          <ChaklabanBibaran.Add
            title="+ चक्ला वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addChaklabanbibaran(e)}
          />
        )}
        {equals(loc, "chaklabanedit") && (
          <ChaklabanBibaran.Edit
            title="चक्ला वन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateChaklabanbibaran(e, id)}
          />
        )}
        {equals(loc, "rastriyabanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="rastriyaban"
                title="दर्ता मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="rastriyaban"
                filename="राष्ट्रिय वन सम्बन्धी विवरण"
                sheet="राष्ट्रिय वन सम्बन्धी विवरण "
              />
            </div>
            <RastriyabanBibaran.List
              buttonName="+ राष्ट्रिय वन"
              title="राष्ट्रिय वन सम्बन्धी विवरण"
              pageCount={
                !isNil(rastriyabanList)
                  ? Math.ceil(rastriyabanList.total / perPage)
                  : 10
              }
              data={!isNil(rastriyabanList) ? rastriyabanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={rastriyabanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("rastriyaban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "rastriyaban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "rastriyabanadd") && (
          <RastriyabanBibaran.Add
            title="+ राष्ट्रिय वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addRastriyabanbibaran(e)}
          />
        )}
        {equals(loc, "rastriyabanedit") && (
          <RastriyabanBibaran.Edit
            title="राष्ट्रिय वन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateRastriyabanbibaran(e, id)}
          />
        )}
        {equals(loc, "commercialbanlist") && (
          <Fragment>
            <div className="report-filter">
              <Filter
                id="commercialban"
                title="दर्ता मिति"
                districtsList={districtList}
                onToDate={this.handleToDate}
                onFromDate={this.handleFromDate}
                onSelect={this.handleDistrict}
              />
              <ReportGenerator
                id="commercialban"
                filename="व्यवसायीक कबुलियति सम्बन्धी विवरण"
                sheet="व्यवसायीक कबुलियति सम्बन्धी विवरण "
              />
            </div>
            <CommercialbanBibaran.List
              buttonName="+ व्यवसायीक कबुलियति वन"
              title="व्यवसायीक कबुलियति वन सम्बन्धी विवरण"
              pageCount={
                !isNil(commercialbanList)
                  ? Math.ceil(commercialbanList.total / perPage)
                  : 10
              }
              data={!isNil(commercialbanList) ? commercialbanList.list : []}
              per={perPage}
              pers={[10, 25, 50, "all"]}
              onPer={this.handlePer}
              headings={commercialbanHeadings}
              user={user}
              role={role}
              onAdd={() => this.handleAdd("commercialban")}
              onSelect={this.handleSelectMenu}
              onPageClick={(e) => this.handlePageChange(e, "commercialban")}
              forcePage={this.state.page}
            />
          </Fragment>
        )}
        {equals(loc, "commercialbanadd") && (
          <CommercialbanBibaran.Add
            title="+ व्यवसायीक कबुलियति वन"
            user={user}
            onSelect={this.handleSelectMenu}
            onSubmit={(e) => this.props.addCommercialbanbibaran(e)}
          />
        )}
        {equals(loc, "commercialbanedit") && (
          <CommercialbanBibaran.Edit
            title="व्यवसायीक कबुलियति वन शंसोधन"
            user={user}
            history={this.props.history}
            onSelect={this.handleSelectMenu}
            onUpdate={(e, id) => this.props.updateCommercialbanbibaran(e, id)}
          />
        )}
      </div>
    );
  }
}

Bankaprakar.propTypes = {
  samudayikbanbibaranDataList: PropTypes.any,
  dharmikbanbibaranDataList: PropTypes.any,
  kabuliyatibanbibaranDataList: PropTypes.any,
  nijibanbibaranDataList: PropTypes.any,
  sajhedaribanbibaranDataList: PropTypes.any,
  chaklabanbibaranDataList: PropTypes.any,
  rastriyabanbibaranDataList: PropTypes.any,
  commercialbanbibaranDataList: PropTypes.any,
  upabhoktasamuhabibaranDataList: PropTypes.any,
};

Bankaprakar.defaultProps = {
  samudayikbanbibaranDataList: {},
  dharmikbanbibaranDataList: {},
  kabuliyatibanbibaranDataList: {},
  nijibanbibaranDataList: {},
  sajhedaribanbibaranDataList: {},
  chaklabanbibaranDataList: {},
  rastriyabanbibaranDataList: {},
  commercialbanbibaranDataList: {},
  upabhoktasamuhabibaranDataList: {},
};

const mapStateToProps = (state) => ({
  districts: state.app.alldistrictsData,
  user: state.app.user,
  role: state.app.user.user_type,
  samudayikbanbibaranDataList: state.bankaprakar.allsamudayikbanbibaranData,
  dharmikbanbibaranDataList: state.bankaprakar.alldharmikbanbibaranData,
  kabuliyatibanbibaranDataList: state.bankaprakar.allkabuliyatibanbibaranData,
  nijibanbibaranDataList: state.bankaprakar.allnijibanbibaranData,
  sajhedaribanbibaranDataList: state.bankaprakar.allsajhedaribanbibaranData,
  chaklabanbibaranDataList: state.bankaprakar.allchaklabanbibaranData,
  rastriyabanbibaranDataList: state.bankaprakar.allrastriyabanbibaranData,
  commercialbanbibaranDataList:
    state.bankaprakar.allcommercialkabuliyatibanbibaranData,
  upabhoktasamuhabibaranDataList: state.bankaprakar.allconsumergroupdetailsData,
});

const mapDispatchToProps = (dispatch) => ({
  //--------------------------Samudayikban
  fetchallSamudayikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallsamudayikbanbibaranRequest(payload)),
  addSamudayikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.addsamudayikbanbibaranRequest(payload)),
  updateSamudayikbanbibaran: (payload, samudayikbanbibaranId) =>
    dispatch(
      BankaprakarActions.updatesamudayikbanbibaranRequest(
        payload,
        samudayikbanbibaranId
      )
    ),

  deleteSamudayikbanbibaran: (samudayikbanbibaranId) =>
    dispatch(
      BankaprakarActions.deletesamudayikbanbibaranRequest(samudayikbanbibaranId)
    ),
  //--------------------------Dharmikban
  fetchallDharmikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchalldharmikbanbibaranRequest(payload)),
  addDharmikbanbibaran: (payload) =>
    dispatch(BankaprakarActions.adddharmikbanbibaranRequest(payload)),
  updateDharmikbanbibaran: (payload, dharmikbanbibaranId) =>
    dispatch(
      BankaprakarActions.updatedharmikbanbibaranRequest(
        payload,
        dharmikbanbibaranId
      )
    ),
  deleteDharmikbanbibaran: (dharmikbanbibaranId) =>
    dispatch(
      BankaprakarActions.deletedharmikbanbibaranRequest(dharmikbanbibaranId)
    ),

  //--------------------------Kabuliyatiban
  fetchallKabuliyatibanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallkabuliyatibanbibaranRequest(payload)),
  addKabuliyatibanbibaran: (payload) =>
    dispatch(BankaprakarActions.addkabuliyatibanbibaranRequest(payload)),
  updateKabuliyatibanbibaran: (payload, kabuliyatibanbibaranId) =>
    dispatch(
      BankaprakarActions.updatekabuliyatibanbibaranRequest(
        payload,
        kabuliyatibanbibaranId
      )
    ),
  deleteKabuliyatibanbibaran: (kabuliyatibanbibaranId) =>
    dispatch(
      BankaprakarActions.deletekabuliyatibanbibaranRequest(
        kabuliyatibanbibaranId
      )
    ),

  //--------------------------Nijiban
  fetchallNijibanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallnijibanbibaranRequest(payload)),
  addNijibanbibaran: (payload) =>
    dispatch(BankaprakarActions.addnijibanbibaranRequest(payload)),
  updateNijibanbibaran: (payload, nijibanbibaranId) =>
    dispatch(
      BankaprakarActions.updatenijibanbibaranRequest(payload, nijibanbibaranId)
    ),
  deleteNijibanbibaran: (nijibanbibaranId) =>
    dispatch(BankaprakarActions.deletenijibanbibaranRequest(nijibanbibaranId)),

  //Sajhedariban
  fetchallSajhedaribanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallsajhedaribanbibaranRequest(payload)),
  addSajhedaribanbibaran: (payload) =>
    dispatch(BankaprakarActions.addsajhedaribanbibaranRequest(payload)),
  updateSajhedaribanbibaran: (payload, sajhedaribanId) =>
    dispatch(
      BankaprakarActions.updatesajhedaribanbibaranRequest(
        payload,
        sajhedaribanId
      )
    ),
  deleteSajhedaribanbibaran: (sajhedaribanId) =>
    dispatch(
      BankaprakarActions.deletesajhedaribanbibaranRequest(sajhedaribanId)
    ),

  //Chaklaban
  fetchallChaklabanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallchaklabanbibaranRequest(payload)),
  addChaklabanbibaran: (payload) =>
    dispatch(BankaprakarActions.addchaklabanbibaranRequest(payload)),
  updateChaklabanbibaran: (payload, chaklabanbibaranId) =>
    dispatch(
      BankaprakarActions.updatechaklabanbibaranRequest(
        payload,
        chaklabanbibaranId
      )
    ),
  deleteChaklabanbibaran: (chaklabanbibaranId) =>
    dispatch(
      BankaprakarActions.deletechaklabanbibaranRequest(chaklabanbibaranId)
    ),

  //Rastriyaban
  fetchallRastriyabanbibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallrastriyabanbibaranRequest(payload)),
  addRastriyabanbibaran: (payload) =>
    dispatch(BankaprakarActions.addrastriyabanbibaranRequest(payload)),
  updateRastriyabanbibaran: (payload, rastriyabanbibaranId) =>
    dispatch(
      BankaprakarActions.updaterastriyabanbibaranRequest(
        payload,
        rastriyabanbibaranId
      )
    ),
  deleteRastriyabanbibaran: (rastriyabanbibaranId) =>
    dispatch(
      BankaprakarActions.deleterastriyabanbibaranRequest(rastriyabanbibaranId)
    ),

  //Commercialban
  fetchallCommercialbanbibaran: (payload) =>
    dispatch(
      BankaprakarActions.fetchallcommercialkabuliyatibanbibaranRequest(payload)
    ),
  addCommercialbanbibaran: (payload) =>
    dispatch(
      BankaprakarActions.addcommercialkabuliyatibanbibaranRequest(payload)
    ),
  updateCommercialbanbibaran: (payload, commercialkabuliyatibanId) =>
    dispatch(
      BankaprakarActions.updatecommercialkabuliyatibanbibaranRequest(
        payload,
        commercialkabuliyatibanId
      )
    ),
  deleteCommercialbanbibaran: (commercialkabuliyatibanId) =>
    dispatch(
      BankaprakarActions.deletecommercialkabuliyatibanbibaranRequest(
        commercialkabuliyatibanId
      )
    ),

  //--------------------------Upabhoktasamuhabibaran
  fetchallUpabhoktasamuhabibaran: (payload) =>
    dispatch(BankaprakarActions.fetchallconsumergroupdetailsRequest(payload)),

  addUpabhoktasamuhabibaran: (payload) =>
    dispatch(BankaprakarActions.addconsumergroupdetailsRequest(payload)),

  updateUpabhoktasamuhabibaran: (payload, consumergroupdetailsId) =>
    dispatch(
      BankaprakarActions.updateconsumergroupdetailsRequest(
        payload,
        consumergroupdetailsId
      )
    ),
  deleteUpabhoktasamuhabibaran: (consumergroupdetailsId) =>
    dispatch(
      BankaprakarActions.deleteconsumergroupdetailsRequest(
        consumergroupdetailsId
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bankaprakar);
