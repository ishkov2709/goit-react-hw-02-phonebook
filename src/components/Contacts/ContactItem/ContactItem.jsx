import { Item, Text, Btn } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = props => {
  const { id, name, number, deleteContact } = props;
  return (
    <Item id={id}>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="button" name="delete" onClick={deleteContact}>
        Delete
      </Btn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
