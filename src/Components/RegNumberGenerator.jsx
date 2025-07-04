import { useState } from "react";
import StudentForm from "./StudentForm";
import { sortStudents, generateRegNumbers } from "../utils/RegistrationUtils";

export default function RegNumberGenerator() {

  const [students, setStudents] = useState([]);
  
  const [generated, setGenerated] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleGenerate = () => {
    const sorted = sortStudents(students);
    const final = generateRegNumbers(sorted);
    setGenerated(final);
  };

  return (
    <div>
      <StudentForm onAddStudent={handleAddStudent} />

      <button onClick={handleGenerate}>Generate Registration Numbers</button>
      
      <h2>Generated Students List:</h2>
      {generated.map((s, i) => (
        <div key={i}>
          {s.fullName} - {s.branch} - <strong>{s.regNo}</strong>
        </div>
      ))}
    </div>
  );
}