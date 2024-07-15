import { useState } from 'react';

/*
  Onchange = event handler used primarly for form element example <input>, <select>, <radio>, <textarea>
              triggers when value changes in input.
*/

function App() {
  const [name, setName] = useState("Guest");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");

  const handleNameChange = (e) => { setName(e.target.value) };
  const handleJobChange = (e) => { setJob(e.target.value) };  
  const handleGenderChange = (e) => { setGender(e.target.value) };

  return (
    <>
      <div className="container">
        <input type="text" placeholder='Enter Name' value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <select name="Job-Role" value={job} onChange={handleJobChange}>
          <option value="">--SELECT--</option>
          <option value="FRONTEND WEB DEVELOPER">FRONTEND WEB DEVELOPER</option>
          <option value="BACKEND WEB DEVELOPER">BACKEND WEB DEVELOPER</option>
          <option value="FULL STACK WEB DEVELOPER">FULL STACK WEB DEVELOPER</option>
        </select>
        <p>Job: {job}</p>

        <label ><input type="radio" name = "Gender" value={"Male"} onChange={handleGenderChange}
        />Male</label>

        <label ><input type="radio" name = "Gender" value={"Female"} onChange={handleGenderChange}
        />Female</label>
        <p>Gender: {gender}</p>
      </div>
    </>
  )
}

export default App
