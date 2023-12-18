import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:8080/booking/all');
      if (response.ok) {
        const bookingsData = await response.json();
        setBookings(bookingsData);

        const pending = bookingsData.filter((booking) => booking.status === 'Pending').length;
        const approved = bookingsData.filter((booking) => booking.status === 'Approved').length;
        const completed = bookingsData.filter((booking) => booking.status === 'Completed').length;

        setPendingCount(pending);
        setApprovedCount(approved);
        setCompletedCount(completed);
      } else {
        console.error('Error fetching bookings.');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:8080/booking/delete/${bookingId}`);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleApprove = async (bookingId) => {
    try {
      // Assuming 'status' is the only field to update, you can add other fields here
      const updatedBooking = {
        status: 'Approved',
        // Add other fields here if needed
      };
  
      await axios.put(`http://localhost:8080/status/${bookingId}`, updatedBooking);
      fetchBookings();
    } catch (error) {
      console.error('Error approving booking:', error);
    }
  };
  
  const handleComplete = async (bookingId) => {
    try {
      // Assuming 'status' is the only field to update, you can add other fields here
      const updatedBooking = {
        status: 'Completed',
        // Add other fields here if needed
      };
  
      await axios.put(`http://localhost:8080/status/${bookingId}`, updatedBooking);
      fetchBookings();
    } catch (error) {
      console.error('Error completing booking:', error);
    }
  };
  

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="counts-container">
        <div className="count-box">
          <p>Pending Requests</p>
          <span>{pendingCount}</span>
        </div>
        <div className="count-box">
          <p>Approved Requests</p>
          <span>{approvedCount}</span>
        </div>
        <div className="count-box">
          <p>Service Completed</p>
          <span>{completedCount}</span>
        </div>
      </div>
      <h2>All Bookings</h2>
      <div className="booking-table-container">
        <table className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.phone}</td>
                <td>{booking.service}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
                <td>
                  <button className="action-button green-button" onClick={() => handleDelete(booking.id)}>
                    Delete
                  </button>
                  {booking.status === 'Pending' && (
                    <button className="action-button blue-button" onClick={() => handleApprove(booking.id)}>
                      Approve
                    </button>
                  )}
                  {booking.status === 'Approved' && (
                    <button className="action-button orange-button" onClick={() => handleComplete(booking.id)}>
                      Complete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
