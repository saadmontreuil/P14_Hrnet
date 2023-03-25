import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

function CustomDropdown({
  options, value, onChange, placeholder,
}) {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default CustomDropdown;
