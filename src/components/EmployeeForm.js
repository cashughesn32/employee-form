import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    position: ''
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    alert('Employee information submitted successfully!');
    setEmployee({
      name: '',
      email: '',
      phone: '',
      position: ''
    });
  };

  return (
    <div className="employee-form">
      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
        />

        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
