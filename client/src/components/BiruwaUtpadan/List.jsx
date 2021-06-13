import React, { Fragment }  from "react";
import { englishToNepaliNumber } from "nepali-number";
import { PropTypes } from "prop-types";
import { isNil } from "ramda";
import { Table } from "react-bootstrap";
import { Button, EditDropdown } from "../../components";

function List(props){
    const { buttonName, headings, data, title, onAdd, onSelect } = props;
    return(
        <Fragment>
            <div className = "card">
                <div className = "button">
                    <Button
                    type="low"
                    size="small"
                    //className="text-capitalize"
                    name= {buttonName}
                    onClick = {onAdd}
                    />
                </div>
                <div className= "titlebar">{title} </div>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>क्र.सं.</th>
                            {headings.map((heading, index) => (
                              <th key = {index}>{heading}</th>  
                            ))}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {isNil(data) ? (
                            <p>No data available !!!!</p>
                        ) : (
                            data.map((biruwa, index) => (
                                <tr>
                                    <td>{englishToNepaliNumber(index +1)}</td>
                                    <td key={index}> {biruwa.arthik_barsa} </td>
                                    <td key={index}> {biruwa.narsari_sankhya} </td>
                                    <td key={index}> {biruwa.barga} </td>
                                    <td key={index}> {biruwa.laxya} </td>
                                    <td key={index}> {biruwa.pragati} </td>
                                    <td key={index}> {biruwa.brixyaropan} </td>
                                    <td key={index}> {biruwa.remarks} </td>
                                    <td key={index}> {biruwa.created_by} </td>
                                    <td key={index}> {biruwa.updated_by} </td>
                                    <td>
                                        <div className="edit">
                                            <EditDropdown
                                            options={["Edit", "Delete"]}
                                            onChange={(e) => onSelect(e, biruwa, "biruwautpadan")}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </Table>
            </div>
        </Fragment>
    );
}

List.propTypes={
    data: PropTypes.array,
    onSelect:PropTypes.func,
};

List.defaultProps = {
    data: [],
    onSelect: () => {},
};

export default List;