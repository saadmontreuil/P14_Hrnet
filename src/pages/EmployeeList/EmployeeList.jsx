import React, { useMemo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MaterialReactTable from 'material-react-table';

export default function EmployeeList() {
  const data = JSON.parse(localStorage.getItem('employees'));

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
      <div>EmployeeList</div>
      <MaterialReactTable data={data} columns={columns} />
    </>
  );
}
