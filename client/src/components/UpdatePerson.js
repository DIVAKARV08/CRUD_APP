import React, { useState } from "react";
import axios from "axios";
import "./UpdatePerson.css";
import Popup from "reactjs-popup";
import EditIcon from "@mui/icons-material/Edit";

const UpdatePerson = (props) => {
  //   console.log(props);
  const [personname, setPersonname] = useState(props.name);
  const [personage, setPersonage] = useState(props.age);
  const addperson = () => {
    if (personname.trim() !== "" && personage !== null) {
      axios
        .put(`http://localhost:8000/api/persons/${props.id}`, {
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
    <div className="">
      <Popup trigger={<EditIcon />} modal nested>
        {(close) => (
          <div className="popup">
            <div className="modal">
              <div className="header"> Update Person </div>
              <div className="content">
                <div className="AddPersons">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Person name..."
                    onChange={(event) => {
                      setPersonname(event.target.value);
                    }}
                    value={personname}
                  ></input>
                  <br />

                  <label>Age</label>
                  <input
                    type="text"
                    placeholder="Person age.."
                    onChange={(event) => setPersonage(event.target.value)}
                    value={personage}
                  ></input>
                  <br />
                </div>
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    close();
                    addperson();
                  }}
                >
                  Update Person
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default UpdatePerson;
