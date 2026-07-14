import React from 'react';
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', this.state);
    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  }

  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <h2>New Employee Form</h2>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Job Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Department:
          <input
            type="text"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add Employee</button>
      </form>
    );
  }
}

export default EmployeeForm;
