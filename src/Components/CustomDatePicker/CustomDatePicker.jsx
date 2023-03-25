import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

function CustomDatePicker({ setDate }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date?.toLocaleDateString('fr-FR'));
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      closeOnScroll
      showWeekNumbers
      isClearable
      clearButtonClassName="react-datepicker__close-icon"
      maxDate={new Date()}
      className="react-datepicker"
      required
    />
  );
}

export default CustomDatePicker;
