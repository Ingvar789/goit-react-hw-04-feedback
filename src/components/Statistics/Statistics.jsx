import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { StatisticsStyled } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsStyled>
    <li className="Statistics__item" id={shortid.generate()}>
      <p>Good:{good}</p>
    </li>
    <li className="Statistics__item" id={shortid.generate()}>
      <p>Neutral:{neutral}</p>
    </li>
    <li className="Statistics__item" id={shortid.generate()}>
      <p>Bad:{bad}</p>
    </li>
    <li className="Statistics__item" id={shortid.generate()}>
      <p>Total:{total}</p>
    </li>
    <li className="Statistics__item" id={shortid.generate()}>
      <p>Positive feedback:{positivePercentage}%</p>
    </li>
  </StatisticsStyled>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
