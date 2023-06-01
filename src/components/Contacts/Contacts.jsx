import { List } from './Contacts.styled';
import ContactItem from './ContactItem';

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
