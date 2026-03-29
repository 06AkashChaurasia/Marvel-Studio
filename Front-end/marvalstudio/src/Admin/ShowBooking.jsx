import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowBooking = () => {
  const [bookings, setBookings] = useState([]);  // Initialize as an array
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentBooking, setCurrentBooking] = useState({
    _id: '',  // Use _id instead of id
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    price: '',
  });

  // Fetch bookings from the API
  useEffect(() => {
    axios.get('http://localhost:5000/api/bookings')  // Make sure the API URL is correct
      .then(response => {
        setBookings(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching bookings!", error);
        setLoading(false);
      });
  }, []);

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter bookings based on search term
  const filteredBookings = bookings.filter(booking =>
    booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.time.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete booking
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/bookings/${id}`)
      .then(() => {
        setBookings(bookings.filter(booking => booking._id !== id));  // Use _id instead of id
      })
      .catch((error) => {
        console.error("Error deleting booking", error);
      });
  };

  // Handle update booking
  const handleUpdate = (booking) => {
    setCurrentBooking(booking);
  };

  // Handle saving the updated booking
  const handleSaveUpdate = () => {
    axios.put(`http://localhost:5000/api/bookings/${currentBooking._id}`, currentBooking)  // Use _id for update
      .then(response => {
        setBookings(bookings.map(booking =>
          booking._id === currentBooking._id ? response.data : booking
        ));
        setCurrentBooking({
          _id: '',
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          price: '',
        });
      })
      .catch((error) => {
        console.error("Error updating booking", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-container">
      <h1>Admin Panel - Manage Bookings</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search bookings..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Booking List */}
      <table className="booking-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.length > 0 ? filteredBookings.map(booking => (
            <tr key={booking._id}>  {/* Use _id instead of id */}
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phone}</td>
              <td>{booking.service}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.price}</td>
              <td>
                <button onClick={() => handleUpdate(booking)} className="btn-update">Update</button>
                <button onClick={() => handleDelete(booking._id)} className="btn-delete">Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="8">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Update Form Modal */}
      {currentBooking._id && (
        <div className="update-form">
          <h2>Update Booking</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={currentBooking.name}
            onChange={(e) => setCurrentBooking({ ...currentBooking, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={currentBooking.email}
            onChange={(e) => setCurrentBooking({ ...currentBooking, email: e.target.value })}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={currentBooking.phone}
            onChange={(e) => setCurrentBooking({ ...currentBooking, phone: e.target.value })}
          />
          <input
            type="text"
            name="service"
            placeholder="Service"
            value={currentBooking.service}
            onChange={(e) => setCurrentBooking({ ...currentBooking, service: e.target.value })}
          />
          <input
            type="date"
            name="date"
            value={currentBooking.date}
            onChange={(e) => setCurrentBooking({ ...currentBooking, date: e.target.value })}
          />
          <input
            type="time"
            name="time"
            value={currentBooking.time}
            onChange={(e) => setCurrentBooking({ ...currentBooking, time: e.target.value })}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={currentBooking.price}
            onChange={(e) => setCurrentBooking({ ...currentBooking, price: e.target.value })}
          />
          <button onClick={handleSaveUpdate} className="btn-submit">Save Update</button>
        </div>
      )}

      <style jsx>{`
        .admin-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .search-container {
          text-align: center;
          margin-bottom: 20px;
        }

        .search-input {
          padding: 8px;
          font-size: 16px;
          width: 80%;
          max-width: 400px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .booking-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .booking-table th, .booking-table td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .btn-update {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 8px 16px;
          margin-right: 10px;
          cursor: pointer;
          border-radius: 4px;
        }

        .btn-update:hover {
          background-color: #45a049;
        }

        .btn-delete {
          background-color: #f44336;
          color: white;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 4px;
        }

        .btn-delete:hover {
          background-color: #e53935;
        }

        .update-form {
          margin-top: 20px;
        }

        .update-form input {
          margin-bottom: 10px;
          padding: 8px;
          width: 100%;
          max-width: 400px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .btn-submit {
          background-color: #4CAF50;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-submit:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default ShowBooking;
