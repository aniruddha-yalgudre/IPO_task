
import React, { useState, useEffect } from 'react';
import { StudentForm } from './Components/StudentForm.jsx';
import { StudentList } from './Components/StudentList.jsx';
import { generateRegistrationNumbers } from './utils/RegistrationUtils.js';

function App() {
  const [students, setStudents] = useState([]);

  // Load students from localStorage on mount
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save students to localStorage whenever students change
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleAddStudent = (studentData) => {
    const newStudent = {
      ...studentData,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };
    setStudents(prev => [...prev, newStudent]);
  };

  const handleGenerateNumbers = () => {
    const studentsWithNumbers = generateRegistrationNumbers(students);
    setStudents(studentsWithNumbers);
  };

  const handleExport = () => {
    const csvContent = generateCSV(students);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `student_registration_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateCSV = (students) => {
    const headers = [
      'Registration Number',
      'Full Name',
      'Father\'s Name',
      'Date of Birth',
      'Aadhar Number',
      'Branch Applied',
      'Contact',
      'Address',
      'Intermediate Details',
      'SSC Details',
      'Admission Year'
    ];

    const csvRows = [
      headers.join(','),
      ...students.map(student => [
        student.registrationNumber || '',
        `"${student.fullName}"`,
        `"${student.fatherName}"`,
        student.dateOfBirth,
        student.aadharNumber,
        student.branchApplied,
        student.contact,
        `"${student.address}"`,
        `"${student.intermediateDetails}"`,
        `"${student.sscDetails}"`,
        student.admissionYear
      ].join(','))
    ];

    return csvRows.join('\n');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Student Form */}
          <StudentForm onAddStudent={handleAddStudent} />

          {/* Student Table */}
          <StudentList
            students={students} 
            onGenerateNumbers={handleGenerateNumbers}
            onExport={handleExport}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
