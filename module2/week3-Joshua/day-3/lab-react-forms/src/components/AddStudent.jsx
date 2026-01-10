import { useState } from "react";

const AddStudent = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [image, setImage] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function handleAddStudent(e) {
    //first stop the page from reloading
    e.preventDefault();

    const studentToAdd = {
      email,
      phone,
      program,
      graduationYear,
      graduated,
      image,
      fullName: name,
    };
    console.log(studentToAdd);
    setStudents([studentToAdd, ...students]);

    //clear the form
    setEmail("");
    setGraduated(false);
    setGraduationYear(2023);
    setImage("");
    setName("");
    setPhone("");
  }

  return (
    <form onSubmit={handleAddStudent}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={(e) => {
              setProgram(e.target.value);
            }}
          >
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={graduationYear}
            onChange={(event) => {
              setGraduationYear(event.target.value);
            }}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={(event) => {
              setGraduated(event.target.checked);
            }}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};
export default AddStudent;
