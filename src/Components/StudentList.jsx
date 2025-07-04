import React from 'react';

export const StudentList = ({ students, onGenerateNumbers, onExport }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN');
  };

  const hasRegistrationNumbers = students.some(s => s.registrationNumber);

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onGenerateNumbers}
          disabled={students.length === 0}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span>
            <i class="ri-hash-line"></i>
            </span>
          Generate Registration Numbers
        </button>
        
        <button
          onClick={onExport}
          disabled={students.length === 0 || !hasRegistrationNumbers}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span>
            <i className="ri-arrow-down-line text-lg "></i>
            </span>
          {/* <Download className="w-4 h-4" /> */}
          Export Data
        </button>
      </div>

      {/* Students Table */}
      {students.length > 0 && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Student Records ({students.length})</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">S.No</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Registration No.</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Full Name</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Father's Name</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">DOB</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Branch</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Contact</th>
                  <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-mono">
                      {student.registrationNumber ? (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                          {student.registrationNumber}
                        </span>
                      ) : (
                        <span className="text-gray-400">Not Generated</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {student.fullName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {student.fatherName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {formatDate(student.dateOfBirth)}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {student.branchApplied}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {student.contact}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {student.admissionYear}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {students.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-2">No Students Added Yet</h3>
          <p className="text-gray-500">Start by adding student information using the form above.</p>
        </div>
      )}
    </div>
  );
};