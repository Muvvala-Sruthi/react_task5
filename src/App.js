import React, { useState } from "react";
import "./App.css";
export default function App() {
  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log(age_now);
    return age_now;
  };
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const handleChangeAge = (event) => {
    const dobValue = event.target.value;
    setDob(dobValue);
  };
  const handleClick = () => {
    const ageValue = calculate_age(dob);
    setAge(ageValue);
  };
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h2 className="h2">Enter your date of birth</h2>      
      <input
        type="date"
        name="date_of_birth"
        value={dob}
        onChange={handleChangeAge}
      />
      <br/>
      <button className="btn" onClick={handleClick}>Calculate Age</button>
      <p className="para">You are {age} years old</p>
    </div>
  );
}
