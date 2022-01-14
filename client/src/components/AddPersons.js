import "./AddPerson.css";
import React, { useState } from "react";
import axios from "axios";

const AddPersons = (props) => {
  const [personname, setPersonname] = useState("");
  const [personage, setPersonage] = useState(null);
  const addperson = () => {
    if (personname.trim() !== "" && personage !== null) {
      axios
        .post("http://localhost:8000/api/persons", {
          name: personname,
          age: personage,
        })
        .then((res) => {
          setPersonage("");
          setPersonage(null);
          props.getPersons();
        });
    } else {
      return;
    }
  };
  return (
    <div className="AddPersons">
      <label>Name</label>
      <input
        type="text"
        placeholder="Person name..."
        onChange={(event) => setPersonname(event.target.value)}
      ></input>
      <br />
      
      <label>Age</label>
      <input
        type="text"
        placeholder="Person age.."
        onChange={(event) => setPersonage(event.target.value)}
      ></input>
      <br />
      <input
        type="submit"
        value="Add Person"
        onClick={() => addperson()}
      ></input>
      {/* <h1>
        {personname} {personage}
      </h1> */}
    </div>
  );
};

export default AddPersons;
