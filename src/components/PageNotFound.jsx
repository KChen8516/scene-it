import React from 'react';

export default ({location}) => (
  <div className="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell">
        <p className="mdc-typography--title">No match for {location.pathname}</p>
      </div>
    </div>
  </div>
);
