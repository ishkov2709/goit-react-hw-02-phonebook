import { Input } from './FilterInput.styled';

const FilterInput = props => {
  const { onChange } = props;
  return (
    <>
      <Input type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default FilterInput;
