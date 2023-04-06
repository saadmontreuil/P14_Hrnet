import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../service/redux/employeeSlice';
import styles from './CreateEmployee.module.css';
import CustomDatePicker from '../../Components/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';
import Modal from '../../Components/Modal/Modal';
import states from '../../data/states';

const departments = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
];

export default function CreateEmployee() {
  const dispatch = useDispatch();

  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState(null);
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [streetError, setStreetError] = useState('');
  const [cityError, setCityError] = useState('');
  const [zipCodeError, setZipCodeError] = useState('');
  const [stateError, setStateError] = useState('');
  const [departmentError, setDepartmentError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [startDateError, setStartDateError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(error);

    const formData = new FormData(event.target);
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const street = formData.get('street');
    const city = formData.get('city');
    const zipCode = formData.get('zip-code');

    let formIsValid = true;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const streetRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!firstName || !nameRegex.test(firstName)) {
      setFirstNameError('Please enter a valid first name.');
      formIsValid = false;
    } else {
      setFirstNameError('');
    }
    if (!lastName || !nameRegex.test(lastName)) {
      setLastNameError('Please enter a valid last name.');
      formIsValid = false;
    } else {
      setLastNameError('');
    }
    if (!birthDate || !dateRegex.test(birthDate)) {
      setBirthDateError('Please enter a valid birth date in the format MM/dd/yyyy.');
      formIsValid = false;
    } else {
      setBirthDateError('');
    }

    if (!startDate || !dateRegex.test(startDate)) {
      setStartDateError('Please enter a valid start date in the format MM/dd/yyyy.');
      formIsValid = false;
    } else {
      setStartDateError('');
    }

    if (!street || !streetRegex.test(street)) {
      setStreetError('Please enter your street address.');
      formIsValid = false;
    } else {
      setStreetError('');
    }

    if (!city) {
      setCityError('Please enter your city.');
      formIsValid = false;
    } else {
      setCityError('');
    }

    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      setZipCodeError('Please enter a valid 5-digit zip code.');
      formIsValid = false;
    } else {
      setZipCodeError('');
    }

    if (!state) {
      setStateError('Please select a state.');
      formIsValid = false;
    } else {
      setStateError('');
    }

    if (!department) {
      setDepartmentError('Please select a department.');
      formIsValid = false;
    } else {
      setDepartmentError('');
    }

    if (!formIsValid) {
      return;
    }

    setIsModalOpen(true);
    setError(null);

    const employee = {
      firstName,
      lastName,
      birthDate,
      startDate,
      address: {
        street,
        city,
        state,
        zipCode,
      },
      department,
    };

    // addEmployee(employee);
    // console.log(employees);
    dispatch(addEmployee(employee));
  };
  return (
    <main className={styles['create-employee']}>
      <div className={styles.header}>
        <h2>Create Employee</h2>
        <Link to="/employees" className={styles['to-employees']}>View Current Employees</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <section className={styles.firstname}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
          />
          <p className={styles.error}>{firstNameError}</p>
        </section>

        <section className={styles.lastname}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
          />
          <p className={styles.error}>{lastNameError}</p>
        </section>

        <section className={styles.birth}>
          <label htmlFor="birth">Date of Birth</label>
          <CustomDatePicker setDate={setBirthDate} />
          <p className={styles.error}>{birthDateError}</p>

        </section>

        <section className={styles.start}>
          <label htmlFor="start">Start Date</label>
          <CustomDatePicker setDate={setStartDate} />
          <p className={styles.error}>{startDateError}</p>
        </section>

        <fieldset>
          <legend>Address</legend>
          <section className={styles.street}>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              id="street"
              required
            />
            <p className={styles.error}>{streetError}</p>
          </section>
          <section className={styles.city}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              required
            />
            <p className={styles.error}>{cityError}</p>
          </section>
          <section className={styles.state}>
            <label htmlFor="state">State</label>
            <CustomDropdown
              options={states}
              value={state}
              onChange={setState}
              placeholder="Select state..."
            />
            <p className={styles.error}>{stateError}</p>
          </section>
          <section className={styles['zip-code']}>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              name="zip-code"
              id="zip-code"
              required
            />
            <p className={styles.error}>{zipCodeError}</p>
          </section>
        </fieldset>

        <section className={styles.department}>
          <label htmlFor="department">Department</label>
          <CustomDropdown
            options={departments}
            value={department}
            onChange={setDepartment}
            placeholder="Select department..."
          />
          <p className={styles.error}>{departmentError}</p>
        </section>
        <button type="submit" className={styles['save-button']}>Save</button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmation"
        message="Employee has been added successfully."
        buttonText="OK"
      />

    </main>
  );
}
