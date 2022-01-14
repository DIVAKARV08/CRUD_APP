import React from "react";
import "./Persons.css";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UpdatePerson from "./UpdatePerson";

const Persons = (props) => {
  const persons = props.persons.map((person, index) => {
    return (
      <li key={index}>
        <div>
          <span>Name :</span> {person.name} <span>Age :</span> {person.age}
        </div>
        <div className="icons">
          <div className="editIcon">
            <UpdatePerson
              getPersons={props.getPersons}
              id={person._id}
              name={person.name}
              age={person.age}
            />
          </div>
          <div>
            <DeleteForeverIcon
              className="deleteIcon"
              onClick={() => removePerson(person._id)}
            />
          </div>
        </div>
      </li>
    );
  });

  const removePerson = (id) => {
    axios.delete(`http://localhost:8000/api/persons/${id}`).then((err) => {
      props.getPersons();
    });
  };

  return (
    <div className="personList">
      <ul>{persons}</ul>
    </div>
  );
};

export default Persons;
