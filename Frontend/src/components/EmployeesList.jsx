import React from 'react'

const EmployeesList = ({ employeeList, ShowUpdateEmployee, DeleteEmployee }) => {

  return (
    <>       
      <td>{ employeeList.id }</td>
      <td>{ employeeList.name }</td>
      <td>{ employeeList.role }</td>
      <td>{ employeeList.salary }</td>
      <td>{ employeeList.company }</td>
      <td>
        <button value = {employeeList.id} onClick = {ShowUpdateEmployee} style = {{ margin : '10px 10px'}}> Update </button>
        <button value={employeeList.id} onClick={DeleteEmployee} style = {{ margin : '10px 10px'}}> Delete </button>
      </td>
    </>
  )
}

export default EmployeesList