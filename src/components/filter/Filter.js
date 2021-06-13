import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyled';

class Filter extends Component {
  render() {
    return (
      <>
        <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
        <InputContainer
          id="filter"
          type="text"
          onChange={this.props.handleChange}
          name="filter"
          value={this.props.filter}
        />
      </>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func,
  filter: PropTypes.string
};

export default Filter;
