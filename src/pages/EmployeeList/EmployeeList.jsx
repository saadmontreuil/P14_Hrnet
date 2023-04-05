import React, { useContext } from 'react';
import MaterialReactTable from 'material-react-table';
import { EmployeeContext } from '../../hook/EmployeeContext';

export default function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  const columns = [
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
  ];

  return (
    <>
      <h2>Employee List</h2>
      <MaterialReactTable
        data={employees}
        columns={columns}
        enableColumnResizing
        defaultColumn={{
          maxSize: 400,
          minSize: 80,
          size: 150,
        }}
      />
    </>
  );
}
