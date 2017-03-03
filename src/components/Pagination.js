'use strict';

// Dependencies
import React from 'react';

const Pagination = props => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${(props.activeLink) === 0 ? 'disabled' : ''}`}>
          <a className="page-link"  href="#" onClick={(e) => props.loadPage(e, props.activeLink-1)}>Previous</a>
        </li>
        {
          Array.from({length: props.total}).map((i, indx) => {
            return (
              <li key={indx} className={`page-item ${indx === props.activeLink ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={(e) => props.loadPage(e, indx)}>{indx + 1}</a>
              </li>
            )
          })
        }
        <li className={`page-item ${((props.activeLink) === (props.total-1)) ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={(e) => props.loadPage(e, props.activeLink+1)}>Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;