import React, { useState, useEffect } from "react";
import axios from "axios";
import AddPersons from "./components/AddPersons";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setpersons] = useState([]);
  const getPersons = () => {
    console.log('called')
    axios
      .get("http://localhost:8000/api/persons")
      .then((res) => setpersons(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPersons();
  }, []);
  return (
    <div>
      <AddPersons getPersons={getPersons} />
      <Persons persons={persons} getPersons={getPersons} />
    </div>
  );
};

export default App;
