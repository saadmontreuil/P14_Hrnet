import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: `2px solid ${state.isFocused ? '#556904' : '#ccc'}`,
    boxShadow: 'none',
    '&:hover': { borderColor: '#556904' },
  }),
  menu: (provided) => ({
    ...provided,
    border: '2px solid #556904',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#556904' : 'transparent',
    color: state.isSelected ? '#fff' : '#000',
    '&:hover': { backgroundColor: '#556904', color: '#fff' },
  }),
};

function CustomDropdown({
  options, value, onChange, placeholder,
}) {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      styles={customStyles}
    />
  );
}

export default CustomDropdown;

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
