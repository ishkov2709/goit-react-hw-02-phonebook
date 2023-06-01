import React from 'react';
import Form from './Form';
import Contacts from './Contacts';
import FilterInput from './FilterInput';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact(name, number) {
    if (this.state.contacts.find(el => el.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      this.setState({
        contacts: [{ id: nanoid(), name, number }, ...this.state.contacts],
      });
    }
  }

  contactsFilterHandler = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  filterContacts(filter, contacts) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  deleteContact = e => {
    const { id } = e.currentTarget.parentNode;
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(el => el.id !== id) };
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <Form
            addContact={(a, b) => {
              this.addContact(a, b);
            }}
          />

          <h2>Contacts</h2>
          <h3>Find contact by name</h3>
          <FilterInput
            onChange={e => {
              this.contactsFilterHandler(e);
            }}
          />
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            filterContacts={(a, b) => this.filterContacts(a, b)}
            deleteContact={e => this.deleteContact(e)}
          />
        </div>
      </div>
    );
  }
}
