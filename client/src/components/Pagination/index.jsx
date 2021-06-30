import React, { Component, Fragment } from "react";
import ReactPaginate from "react-paginate";
import { PropTypes } from "prop-types";
import { isNil, equals, length } from "ramda";
import "./Pagination.scss";

export class Pagination extends Component {
  render() {
    const { onPageClick, pageCount, pers, per, onPer, type } = this.props;
    return (
      <div className="paginationStyle">
        <ReactPaginate
          previousLabel={"PREV"}
          nextLabel={"NEXT"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onPageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
        <div>
          {length(pers) > 0 && (
            <div className="d-flex ml-auto">
              {pers.map((item) => {
                const page = {
                  active:
                    equals(item, per) ||
                    (equals(item, "all") && equals(5000, per)),
                };
                const counts = equals("all", item) ? 5000 : item;
                return (
                  <Fragment key={item}>
                    <span className={page} onClick={() => onPer(counts, type)}>
                      {item}
                    </span>
                    {!equals("all", item) && <span className="px-2">|</span>}
                  </Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
Pagination.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  current: PropTypes.number.isRequired,
  per: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  pers: PropTypes.arrayOf(PropTypes.any),
  size: PropTypes.oneOf(["small", "large"]),
  suffix: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onPer: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  data: [],
  onSelect: () => {},
  current: 1,
  // Item counts per page
  per: 25,
  // Total page counts
  total: 2,
  // Steps
  pers: [25, 50, "all"],
  size: "small",
  suffix: "",
  onChange: (e) => {},
  onPer: (e) => {},
};

export default Pagination;
