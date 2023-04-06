import { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

function CustomDatePicker({ setDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date?.toLocaleDateString('fr-FR'));
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MM/dd/yyyy"
      closeOnScroll
      showWeekNumbers
      isClearable
      clearButtonClassName="react-datepicker__close-icon"
      maxDate={new Date()}
      className="react-datepicker"
      placeholderText="Select a date"
      required
    />
  );
}

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
};
