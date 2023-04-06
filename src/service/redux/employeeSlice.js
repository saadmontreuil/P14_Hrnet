import { createSlice } from '@reduxjs/toolkit';

const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: storedEmployees,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      localStorage.setItem('employees', JSON.stringify(state.employees));
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
