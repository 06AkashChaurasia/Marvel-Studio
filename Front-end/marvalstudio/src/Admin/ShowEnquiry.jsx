import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]); // Ensure it starts as an array
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch enquiries from the API (Make sure your backend is running)
  useEffect(() => {
    axios.get('/api/enquiries')  // Ensure the backend endpoint is correct
      .then(response => {
        const data = response.data;
        // If the data is an array, set it, else fallback to empty array
        setEnquiries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching enquiries!", error);
        setLoading(false);
      });
  }, []);

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter enquiries based on search term
  const filteredEnquiries = enquiries.filter(enquiry =>
    enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enquiry.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete enquiry
  const handleDelete = (id) => {
    axios.delete(`/api/enquiries/${id}`)
      .then(() => {
        setEnquiries(enquiries.filter(enquiry => enquiry._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting enquiry", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-container">
      <h1>Admin Panel - Manage Enquiries</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search enquiries..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Enquiry List */}
      <table className="enquiry-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnquiries.length > 0 ? filteredEnquiries.map(enquiry => (
            <tr key={enquiry._id}>
              <td>{enquiry.name}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.phone}</td>
              <td>{enquiry.subject}</td>
              <td>{enquiry.message}</td>
              <td>
                <button onClick={() => handleDelete(enquiry._id)} className="btn-delete">Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6">No enquiries found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowEnquiry;
