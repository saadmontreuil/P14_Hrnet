import React from 'react';
import { Link } from 'react-router-dom';
import CustomDatePicker from '../../Components/CustomDatePicker/CustomDatePicker';

export default function CreateEmployee() {
  return (
    <main className="create-employee">
      <div className="header">
        <h2>Create Employee</h2>
        <Link to="/employees" className="to-employees">View Current Employees</Link>
      </div>
      <form>
        <section className="firstname">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            required
          />
        </section>

        <section className="lastname">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            required
          />
        </section>

        <section className="birth">
          <label htmlFor="birth">Date of Birth</label>
          <CustomDatePicker />
        </section>

        <section className="start">
          <label htmlFor="start">Start Date</label>
          <CustomDatePicker />
        </section>

        <fieldset>
          <legend>Address</legend>
          <section className="street">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              id="street"
              required
            />
          </section>
          <section className="city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              required
            />
          </section>
          <section className="state">
            <label htmlFor="state">State</label>
          </section>
          <section className="zip-code">
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              name="zip-code"
              id="zip-code"
              required
            />
          </section>
        </fieldset>

        <section className="department">
          <label htmlFor="deparment">Department</label>
        </section>

        <button type="submit" className="save-button">Save</button>
      </form>

    </main>
  );
}
