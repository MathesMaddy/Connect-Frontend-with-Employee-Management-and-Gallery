import { useEffect, useState } from "react";
import "./App.css";

import GalleryView from "./components/GalleryView";
import { Route, Routes } from "react-router-dom";
import EmployeeView from "./components/EmployeeView";

// url for backend's
const getURL = `http://localhost:4000/`;
const delURL = `http://localhost:4000/delete`;
const updateURL = `http://localhost:4000/update`;
const createURL = `http://localhost:4000/create`;

function App() {
    
    // store the employee's backend GET
    const [employeeList, setEmployeeList] = useState([]);
    // Re-render the page after response.ok
    const [ reFetch, setReFetch ] = useState(false);
    // create new Employee 
    const [createEmployee, setCreateEmployee] = useState({
      name: "",
      role: "",
      salary: "",
      company: "",
    });
    // update Employee Details for store to display in the input and after modify update to the backend
    const [updateEmployeeDetails, setUpdateEmployeeDetails] = useState({
      id: "",
      name: "",
      role: "",
      salary: "",
      company: "",
    });

    useEffect(() => {
        const fetchData = async () => {
          try {
            let fetched = await fetch(getURL, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            let data = await fetched.json();
            setEmployeeList(data);
          } 
          catch (e) {
            console.error(e);
          }
        };
        fetchData();    
    }, [reFetch]);

    const AddNewEmployee = async (e) => {
      e.preventDefault();
      // checking all values is given
      if( createEmployee.name && createEmployee.role && createEmployee.salary && createEmployee.company ) {
        try {
          let data = await fetch(`${createURL}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(createEmployee),
          });
          if(data.ok) {
            // store response for re-render using useEffect
            setReFetch(data);
            // set empty value to CreateEmployee state for display input value empty
            setCreateEmployee({
                name: "",
                role: "",
                salary: "",
                company: "",
            });
          }
        } 
        catch(e) {
          console.error(e);
        }
      }
    };

    // onChange function to store value in the CreateEmployee
    // This method of storing all the input value in one useState learned from youtube channel
    const AddEmployeeDetails = (e) => {
      setCreateEmployee( (prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    
    // update Employee it change all values is given and it will put.
    const UpdateEmployee = async (e) => {
      e.preventDefault();
      let id = updateEmployeeDetails.id;
      if( updateEmployeeDetails.name && updateEmployeeDetails.role && updateEmployeeDetails.salary && updateEmployeeDetails.company ) {
          try {
            let data = await fetch(`${updateURL}/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateEmployeeDetails),
            });
            if (data.ok) {
              // store response for re-render using useEffect
              setReFetch(data);              
              // set empty value to UpdateEmployeeDetails state for display input value empty
              setUpdateEmployeeDetails({
                  id: "",
                  name: "",
                  role: "",
                  salary: "",
                  company: "",
              })
            }
          } 
          catch (e) {
            console.error(e);
          }
      }
    };

    // show update employee is update button 
    const ShowUpdateEmployee = async (e) => {
      let id = e.target.value;
      // find employee based on id value and show in the input tag
      let data = employeeList.find((item) => item.id === Number(id));
      setUpdateEmployeeDetails(data);
    };

    // onchange used for the input tag in display update filled 
    // if change is happen the value will based on the name of input tag attribute
    // This method of storing all the input change value in one useState learned from youtube channel
    const updateDetails = (e) => {
      if (e.target.value) {
        setUpdateEmployeeDetails((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    };

    // Delete Employee based on the id
    const DeleteEmployee = async (e) => {
      let id = e.target.value;
        try {
          let data = await fetch(`${delURL}/${id}`, {
            method: "DELETE",
          });
          if (data.ok) {
            // store response for re-render using useEffect
            setReFetch(data);
          }
        } 
        catch (e) {
          console.error(e);
        }
    };

    return (
      <>
        <div>          
          <Routes>

            <Route path = "/" index element = { 
              <EmployeeView 
                  UpdateEmployee = {UpdateEmployee} 
                  updateEmployeeDetails = {updateEmployeeDetails}
                  updateDetails = {updateDetails} 
                  employeeList = {employeeList} 
                  ShowUpdateEmployee = {ShowUpdateEmployee} 
                  DeleteEmployee = {DeleteEmployee} 
                  AddNewEmployee = {AddNewEmployee} 
                  createEmployee = {createEmployee} 
                  AddEmployeeDetails = {AddEmployeeDetails} />} 
              />
            <Route path = "/gallery" element = {<GalleryView />} />
          </Routes>
        </div>
      </>
    );
}

export default App;