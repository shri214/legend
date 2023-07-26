import React, { useState } from 'react';
import './style.scss';
import CustomDatePicker from './dates';
import { Rooms } from './rooms';

function Header() {
  const [focus, setFocus] = useState(true);
  const [search, setSearch] = useState('');

  const focusOnInput = () => {
    setFocus(false);
  };
  const blurOnInput = () => {
    setFocus(true);
  };

  return (
    <div className="nav">
      <div className="logo">HOTEL</div>
      <div className="searchBar">
        <div className="input-search">
          <input
            type="search"
            onFocus={focusOnInput}
            onBlur={blurOnInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {focus && search === '' && (
            <button id="nearMe">
              <span className="material-icons">my_location</span>
              near me
            </button>
          )}
        </div>
        <div className="dates">
          <CustomDatePicker />
          <CustomDatePicker />
        </div>
        <div className="guest">
          <Rooms />
        </div>
        <div className="search">
          <button>search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
