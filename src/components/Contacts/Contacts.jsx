import { List } from './Contacts.styled';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

const Contacts = props => {
  const { contacts, filter, filterContacts, deleteContact } = props;
  return (
    <>
      {contacts.length > 0 && (
        <>
          <List>
            {filter
              ? filterContacts(filter, contacts).map(({ id, name, number }) => {
                  return (
                    <ContactItem
                      key={id}
                      id={id}
                      name={name}
                      number={number}
                      deleteContact={e => deleteContact(e)}
                    />
                  );
                })
              : contacts.map(({ id, name, number }) => {
                  return (
                    <ContactItem
                      key={id}
                      id={id}
                      name={name}
                      number={number}
                      deleteContact={e => deleteContact(e)}
                    />
                  );
                })}
          </List>
        </>
      )}
    </>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  filterContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
