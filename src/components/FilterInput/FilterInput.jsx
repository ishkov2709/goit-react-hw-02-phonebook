import { Input } from './FilterInput.styled';
import PropTypes from 'prop-types';

const FilterInput = props => {
  const { onChange } = props;
  return (
    <>
      <Input type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default FilterInput;

FilterInput.propTypes = {
  onChange: PropTypes.func,
};
