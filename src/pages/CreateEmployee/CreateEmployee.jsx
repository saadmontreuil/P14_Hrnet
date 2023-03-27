import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState(null);
  const [state, setState] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);

    const formData = new FormData(event.target);
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const street = formData.get('street');
    const city = formData.get('city');
    const zipCode = formData.get('zip-code');

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

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
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
        </section>

        <section className={styles.lastname}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
          />
        </section>

        <section className={styles.birth}>
          <label htmlFor="birth">Date of Birth</label>
          <CustomDatePicker setDate={setBirthDate} />
        </section>

        <section className={styles.start}>
          <label htmlFor="start">Start Date</label>
          <CustomDatePicker setDate={setStartDate} />
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
          </section>
          <section className={styles.city}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              required
            />
          </section>
          <section className={styles.state}>
            <label htmlFor="state">State</label>
            <CustomDropdown
              options={states}
              value={state}
              onChange={setState}
              placeholder="Select state..."
            />
          </section>
          <section className={styles['zip-code']}>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              name="zip-code"
              id="zip-code"
              required
            />
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
