import { ChangeEvent } from 'react';

import { Select as StyledSelect } from './styled';

type SelectProps = {
  current: string | number;
  options: Array<{ name: string; value: string | number }>;
  onSelect: (value: string) => void;
};

function Select({ current, options, onSelect }: SelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <StyledSelect value={current} onChange={handleChange}>
      {options.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
