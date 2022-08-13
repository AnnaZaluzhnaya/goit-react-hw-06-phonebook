import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Filter.module.css';
import {changeFilter} from 'redux/slice';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);

  const inputChange = event => {
    const changeValue = event.target.value;

    dispatch(changeFilter(changeValue));
      
    };
  
  return (
    <div className={style.filter}>
      <label>
        <p>Find contacts by name</p>
        <input
          className={style.input}
          type="text"
          name="number"
          value={value}
          onChange={inputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputChange: PropTypes.func,
};

export default Filter;
