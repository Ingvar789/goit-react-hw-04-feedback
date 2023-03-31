import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';
const Section = ({ title, children }) => (
  <SectionStyled>
    <h2>{title}</h2>
    {children}
  </SectionStyled>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
