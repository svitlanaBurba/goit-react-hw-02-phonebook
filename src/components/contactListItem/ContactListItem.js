import React, {Component} from 'react';
import {ButtonContainer} from '../contactForm/ContactFormStyled';
import {ContactListItemContainer} from './ContactListItemStyled';
import PropTypes from 'prop-types';

class ContactListItem extends Component {
  render() {
    return (
      <ContactListItemContainer>
        <p className="contactListItemText">
          {this.props.name}: {this.props.number}
        </p>
        <ButtonContainer type="button" onClick={this.props.deleteContact}>
          Delete
        </ButtonContainer>
      </ContactListItemContainer>
    );
  }
}

ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

export default ContactListItem;
