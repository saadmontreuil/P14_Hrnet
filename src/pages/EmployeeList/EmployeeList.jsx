import React, { useMemo, useContext } from 'react';
import MaterialReactTable from 'material-react-table';
import { EmployeeContext } from '../../hook/EmployeeContext';

export default function EmployeeList() {
  // const data = JSON.parse(localStorage.getItem('employees'));
  const { employees } = useContext(EmployeeContext);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
      },
      {
        accessorKey: 'department.label',
        header: 'Department',
      },
      {
        accessorKey: 'birthDate',
        header: 'Date of Birth',
      },
      {
        accessorKey: 'address.street',
        header: 'Street',
      },
      {
        accessorKey: 'address.city',
        header: 'City',
      },
      {
        accessorKey: 'address.state.label',
        header: 'State',
      },
      {
        accessorKey: 'address.zipCode',
        header: 'Zip Code',
      },
    ],
    [],
  );

  return (
    <>
      <h2>Employee List</h2>
      <MaterialReactTable data={employees} columns={columns} />
    </>
  );
}
