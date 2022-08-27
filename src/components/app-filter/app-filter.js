import { Component } from 'react';
// import Button from "../Button/Button";

import "./app-filter.css";
import button from "../Button/Button";

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'like', label: 'На повышение'},
        {name: 'thousand', label: 'З/П больше 1000'},
    ];

   const buttons = buttonData.map(({name, label}) => {
      const active = props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light';

      return (
          <button type="button"
                  className={`btn ${clazz}`}
                  key={name}
                  onClick={() => props.onFilterSelect(name)}>
                  {label}
          </button>
      )
   });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;