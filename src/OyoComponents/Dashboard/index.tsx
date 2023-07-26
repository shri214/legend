import React from 'react';
import FilterComponents from '../FilterComponents';
import Main from '../Main';
import './style.scss';

function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="filterComponents">
        <FilterComponents />
      </div>
      <div style={{ flex: 3 }}>
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
