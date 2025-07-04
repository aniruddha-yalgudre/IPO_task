import React, { useState } from 'react';
import { BRANCHES } from '../utils/Student';

export const StudentForm = ({ onAddStudent }) => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    dateOfBirth: '',
    aadharNumber: '',
    intermediateDetails: '',
    sscDetails: '',
    address: '',
    contact: '',
    branchApplied: '',
    admissionYear: new Date().getFullYear(),
  });

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.fullName && formData.fatherName && formData.dateOfBirth && 
        formData.aadharNumber && formData.contact && formData.branchApplied && formData.address) {
      onAddStudent(formData);
      setFormData({
        fullName: '',
        fatherName: '',
        dateOfBirth: '',
        aadharNumber: '',
        intermediateDetails: '',
        sscDetails: '',
        address: '',
        contact: '',
        branchApplied: '',
        admissionYear: new Date().getFullYear(),
      });
    } else {
      alert('Please fill all required fields');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Student</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Father's Name *
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter father's name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhar Number *
            </label>
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter 12-digit Aadhar number"
              maxLength={12}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number *
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter contact number"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branch Applied *
            </label>
            <select
              name="branchApplied"
              value={formData.branchApplied}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Branch</option>
              {BRANCHES.map(branch => (
                <option key={branch.code} value={branch.name}>
                  {branch.fullName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admission Year
            </label>
            <input
              type="number"
              name="admissionYear"
              value={formData.admissionYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              min="2020"
              max="2030"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Intermediate Details
            </label>
            <input
              type="text"
              name="intermediateDetails"
              value={formData.intermediateDetails}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Board, Percentage, Year"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              SSC Details
            </label>
            <input
              type="text"
              name="sscDetails"
              value={formData.sscDetails}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Board, Percentage, Year"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address *
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter complete address"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            <span>
                <i className="ri-add-line text-lg"></i>
              </span>
            
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};