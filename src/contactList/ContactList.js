import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import ContactListItem from '../components/contactListItem/ContactListItem';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={uuid()}
            deleteContact={() => this.props.deleteContact(contact.id)}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

export default ContactList;
