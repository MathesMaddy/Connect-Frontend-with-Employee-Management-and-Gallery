import React from 'react'
import EmployeesList from './EmployeesList'

const EmployeeView = ({ UpdateEmployee, updateEmployeeDetails, updateDetails, employeeList, ShowUpdateEmployee, DeleteEmployee, AddNewEmployee, createEmployee, AddEmployeeDetails   }) => {
  return (
    <div style = {{ display: "flex" }}>
        <div style = {{ }}>
            <h2> Update Employee Details </h2>
            <form onSubmit = {UpdateEmployee}>
              <input
                type = "text"
                required
                value = {updateEmployeeDetails.name}
                onChange = {updateDetails}
                disabled = { updateEmployeeDetails.name ? false : true}
                name = "name"
                placeholder = "Name"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <input
                type = "text"
                required
                value = {updateEmployeeDetails.role}
                onChange = {updateDetails}
                disabled = { updateEmployeeDetails.role ? false : true}
                name = "role"
                placeholder = "Role"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <input
                type = "number"
                required
                value = {updateEmployeeDetails.salary}
                onChange = {updateDetails}
                disabled = { updateEmployeeDetails.salary ? false : true}
                name = "salary"
                placeholder = "Salary"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <input
                type = "text"
                required
                value = {updateEmployeeDetails.company}
                onChange = {updateDetails}
                disabled = { updateEmployeeDetails.company ? false : true}
                name = "company"
                placeholder = "Company"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <button type="submit">Update</button>
            </form>
          </div>

          <div style = {{ margin: "0px 100px", width: '800px'}}>
            <h2> Employee Management </h2>
            { employeeList.length ? (
                <table style = {{ width : '800px', textAlign : 'center' }}>
                  <thead>
                    <tr>
                      <th>Emp.No</th>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Salary</th>
                      <th>Company</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    { employeeList.length ? employeeList.map((item, index) => (
                      <tr key={index}>
                        <EmployeesList                      
                          employeeList = {item}
                          ShowUpdateEmployee = {ShowUpdateEmployee}
                          DeleteEmployee = {DeleteEmployee}
                        />
                      </tr>
                )) : '' }
              </tbody>
            </table>
            ) : <div><p style = {{ textAlign : 'center' }}> No Employee Details. </p></div> }
          </div>
          <div>
            <h2> Creat New Employee </h2>
            <form onSubmit = {AddNewEmployee}>
              <input
                type = "text"
                required
                name = "name"
                value = {createEmployee.name}
                onChange = {AddEmployeeDetails}
                placeholder = "Name"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <input
                type = "text"
                required
                name = "role"
                value = {createEmployee.role}
                onChange = {AddEmployeeDetails}
                placeholder = "Role"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <input
                type = "number"
                required
                name = "salary"
                value = {createEmployee.salary}
                onChange = {AddEmployeeDetails}
                placeholder = "Salary"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <input
                type = "text"
                required
                name = "company"
                value = {createEmployee.company}
                onChange = {AddEmployeeDetails}
                placeholder = "Company"
                style = {{
                  display: "block",
                  padding: "8px 20px",
                  margin: "20px 0px",
                }}
              />
              <button type="submit"> Submit </button>
            </form>
          </div>
    </div>
  )
}

export default EmployeeView