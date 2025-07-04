import { BRANCHES, INSTITUTE_CODE } from './Student';

export const generateRegistrationNumber = (student, sortOrder) => {
  const yearCode = student.admissionYear.toString().slice(-2);
  const branch = BRANCHES.find(b => b.name === student.branchApplied);
  const branchCode = branch?.code || '00';
  const serialNumber = sortOrder.toString().padStart(2, '0');
  
  return `${yearCode}${INSTITUTE_CODE}${branchCode}${serialNumber}`;
};

export const sortStudents = (students) => {
  return [...students].sort((a, b) => {
    // First sort by full name
    const nameComparison = a.fullName.localeCompare(b.fullName);
    if (nameComparison !== 0) return nameComparison;
    
    // If names are same, sort by father's name
    const fatherNameComparison = a.fatherName.localeCompare(b.fatherName);
    if (fatherNameComparison !== 0) return fatherNameComparison;
    
    // If both are same, sort by date of birth
    return new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime();
  });
};

export const generateRegistrationNumbers = (students) => {
  // Group students by branch
  const studentsByBranch = {};
  
  students.forEach(student => {
    if (!studentsByBranch[student.branchApplied]) {
      studentsByBranch[student.branchApplied] = [];
    }
    studentsByBranch[student.branchApplied].push(student);
  });
  
  // Sort each branch and generate registration numbers
  const updatedStudents = [];
  
  Object.keys(studentsByBranch).forEach(branch => {
    const branchStudents = sortStudents(studentsByBranch[branch]);
    
    branchStudents.forEach((student, index) => {
      const sortOrder = index + 1;
      const registrationNumber = generateRegistrationNumber(student, sortOrder);
      
      updatedStudents.push({
        ...student,
        registrationNumber,
        sortOrder
      });
    });
  });
  
  return updatedStudents;
};