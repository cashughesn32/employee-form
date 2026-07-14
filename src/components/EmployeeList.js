import React from 'react';
import './EmployeeForm.css';

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      <ul>
        {employees.length === 0 ? (
          <li>No employees added yet.</li>
        ) : (
          employees.map((emp, index) => (
            <li key={index}>
              {emp.name} — {emp.email} — {emp.phone} — {emp.position}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
