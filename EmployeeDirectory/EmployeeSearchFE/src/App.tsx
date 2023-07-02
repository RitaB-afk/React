import React, { useEffect, useState } from "react";
import "./App.css";
import { Employee } from "./interfaces";

export const App = () => {
  const [employeesDisplayed, setEmployeesDisplayed] = useState<boolean>(false);
  const [inputState, setInputState] = useState<string>();
  const [employeesresult, setEmployeesresult] = useState<Employee[]>();
  useEffect(() => {
    fetch("https://localhost:7131/Employee")
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchData = (input: string | undefined) => {
    const apiUrl = `https://localhost:7131/Employee/name?name=${input}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setEmployeesresult(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setEmployeesDisplayed(true);
    fetchData(inputState);
  };
  return (
    <>
      <div className="App">
        <h1>Welcome to the company portal</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Search for an employee:
            <input
              type="text"
              placeholder="Type your search here..."
              onBlur={(e) => setInputState(e.target.value)}
            ></input>
          </label>
          <button type="submit">Search</button>
        </form>
        {employeesDisplayed &&
        employeesresult?.map((emp) => <><p key={emp.id}>{emp.name}</p><span>{emp.phoneNumber}</span></>)}
      </div>
      
    </>
  );
};

export default App;
