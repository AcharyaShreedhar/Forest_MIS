import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { equals, isNil } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown, Pagination } from "../../components";

function List(props) {
  const {
    buttonName,
    headings,
    data,
    title,
    onAdd,
    onSelect,
    pageCount,
    onPageClick,
    pers,
    per,
    onPer,
    role
  } = props;

  return (
    <Fragment>
      <div className="card">
        <div className="button">
          <Button type="low" size="small" name={buttonName} onClick={onAdd} />
        </div>
        <div className="titlebar">{title} </div>
        <Table
          responsive
          striped
          bordered
          hover
          id="muddaanusandhandayaris"
          size="md"
        >
          <thead>
            <tr>
              <th>क्र.स.</th>
              {headings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
              <th />
            </tr>
          </thead>
          <tbody>
            {isNil(data) ? (
              <p>No data Available !!!</p>
            ) : (
              data.map((mudda, index) => (
                <tr key={`${mudda.mudda_anusandhan_dayari_id}-${index}`}>
                  <td>{englishToNepaliNumber(index + 1)}</td>
                  <td>{mudda.jaheri_partibedan_miti}</td>
                  <td>
                    {equals(mudda.kasurko_kisim, 1)
                      ? "बन पैदावार चोरिनिकासी"
                      : equals(mudda.kasurko_kisim, 2)
                      ? "बन्यजन्तु अपराध"
                      : "बन अतिक्रमण"}
                  </td>
                  <td>{mudda.bigo_pariman}</td>
                  <td>{mudda.jaggako_area}</td>
                  <td>{mudda.jaggako_thegana}</td>
                  <td>{mudda.abhiyog_miti}</td>
                  <td>{mudda.abhiyog_nikaya}</td>
                  <td>{mudda.abhiyog_jariwana}</td>
                  <td>{mudda.kaid}</td>
                  <td>
                    {equals(mudda.bojbahak_jafat_maagdabi, 1)
                      ? "लिएको"
                      : "नलिएको"}
                  </td>
                  <td>{mudda.pratibadi_sankhya}</td>
                  <td>{mudda.thunchek_dharauti}</td>
                  <td>{mudda.sadharan_tarekh}</td>
                  <td>{mudda.thuna_aadhes}</td>
                  <td>{mudda.faisala_miti}</td>
                  <td>{mudda.faisala_jariwana}</td>
                  <td>{mudda.faisala_kaid}</td>
                  <td>{equals(mudda.bojbahak_jafat, 1) ? "भएको" : "नभएको"}</td>
                  <td>{equals(mudda.faisala_status, 1) ? "भएको" : "नभएको"}</td>
                  <td>
                    <div className="edit">
                      <EditDropdown
                        options={role < 3 ? ["Edit"] : ["Edit", "Delete"]}
                        onChange={(e) =>
                          onSelect(e, mudda, "muddaanusandhandayari")
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Pagination
          per={per}
          pers={pers}
          onPer={onPer}
          pageCount={pageCount}
          onPageClick={onPageClick}
          type="muddaanusandhandayaris"
        />
      </div>
    </Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
};

List.defaultProps = {
  data: [],
  onSelect: () => {},
};

export default List;
