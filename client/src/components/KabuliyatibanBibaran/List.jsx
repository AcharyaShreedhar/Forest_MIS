import React, { Fragment } from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown } from "../../components";

function List(props) {
  const { buttonName, headings, data, title, onSelect } = props;
  return (
    <Fragment>
      <div className="card">
        <div className="button">
          <Button
            type="low"
            size="small"
            // className="text-capitalize"
            name={buttonName}
            onClick={(e) => onSelect(e)}
          />
        </div>
        <div className="titlebar">{title} </div>
        <Table responsive striped bordered hover>
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
              data.map(
                (kban, index) => (
                  "दर्ता नं",
                  "दर्ता मिति",
                  "सामुदायिक वन उपभोक्ता समितिको नाम",
                  "ठेगाना साविक",
                  "ठेगाना हाल",
                  "दलित घरधुरी",
                  "जनजाति घरधुरी",
                  "अन्य घरधुरी",
                  "जम्मा घरधुरी",
                  "महिला जनसंख्या",
                  "पुरुष जनसंख्या",
                  "जम्मा जनसंख्या",
                  "सम्पन्न ",
                  "मध्यम",
                  "विपन्न",
                  "कार्यसमितिमा दलित प्रतिनिधित्व",
                  "कार्यसमितिमा जनजाति प्रतिनिधित्व",
                  "कार्यसमितिमा अन्य प्रतिनिधित्व",
                  "मुख्य पदाधिकारीमा प्रतिनिधित्व(महिला अध्यक्ष)",
                  "मुख्य पदाधिकारीमा प्रतिनिधित्व(पुरुष अध्यक्ष)",
                  "मुख्य पदाधिकारीमा प्रतिनिधित्व(महिला सचिव)",
                  "मुख्य पदाधिकारीमा प्रतिनिधित्व(पुरुष सचिव)",
                  "सिर्जना गर्ने",
                  "परिमार्जन गर्ने",
                  (
                    <tr>
                      <td>{englishToNepaliNumber(index + 1)}</td>
                      <td key={index}> {kban.kabuliyatiban_bibaran_id}</td>
                      <td key={index}> {kban.entry_date}</td>
                      <td key={index}>{kban.samudayik_upavokta_samiti_name}</td>
                      <td key={index}> {kban.perm_addr}</td>
                      <td key={index}> {kban.curr_addr}</td>
                      <td key={index}> {kban.gharduri_dalit}</td>
                      <td key={index}> {kban.gharduri_janjati}</td>
                      <td key={index}> {kban.gharduri_anya}</td>
                      <td key={index}> {kban.ghardhuri_total}</td>
                      <td key={index}> {kban.population_female}</td>
                      <td key={index}> {kban.population_male}</td>
                      <td key={index}> {kban.population_total}</td>
                      <td key={index}> {kban.sampannata_starikan_sampanna}</td>
                      <td key={index}> {kban.sampannata_starikan_madhyam}</td>
                      <td key={index}> {kban.sampannata_starikan_bipanna}</td>
                      <td key={index}>{kban.karyasamiti_representation_dalit}</td>
                      <td key={index}>{kban.karyasamiti_representation_janjati}</td>
                      <td key={index}>{kban.karyasamiti_representation_anya}</td>
                      <td key={index}> {kban.adhyakshya_female}</td>
                      <td key={index}> {kban.adhyakshya_male}</td>
                      <td key={index}> {kban.sachib_female}</td>
                      <td key={index}> {kban.sachib_male}</td>
                      <td key={index}> {kban.created_by}</td>
                      <td key={index}> {kban.updated_by}</td>

                      <td>
                        <div className="edit">
                          <EditDropdown
                            options={["Edit", "Delete"]}
                            onChange={(e) => onSelect(e)}
                          />
                        </div>
                      </td>
                    </tr>
                  )
                )
              )
            )}
          </tbody>
        </Table>
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
