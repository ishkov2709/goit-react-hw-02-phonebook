import { Item, Text, Btn } from './ContactItem.styled';

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
