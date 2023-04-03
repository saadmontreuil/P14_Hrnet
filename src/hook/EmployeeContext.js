import React, {
  createContext, useState, useMemo, useEffect,
} from 'react';

export const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
  // useMemo
  // <EmployeeContext.Provider value={{ employees, addEmployee }}>
  //   {children}
  // </EmployeeContext.Provider>
    // useCallback
    <EmployeeContext.Provider value={useMemo(() => ({ employees, addEmployee }), [employees])}>
      {children}
    </EmployeeContext.Provider>
  );
}
