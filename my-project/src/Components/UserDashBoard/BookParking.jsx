import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookParking = () => {
  const { parkingSlotId } = useParams(); // Get parking slot ID from the URL params
  const [formData, setFormData] = useState({
    bookingDate: '',  // To store the current date
    arrivalDate: '',
    departureDate: '',
    vehicleNo: '',
    vehicleType: 'TWO_WHEELER', // Default value, can be changed
    parkingHours: 1,
    price: 0.0,
    customer_id: '', // Will be set dynamically based on the logged-in user
    parking_slot_id: parkingSlotId, // Set from URL params
    status: 'RESERVED', // Default status, can be changed based on logic
  });

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        customer_id: userId,
        bookingDate: new Date().toISOString().split('T')[0], // Set the booking date to the current date
      }));
    }
  }, []);

  const calculatePrice = (hours, vehicleType) => {
    let price = 0;
    if (vehicleType === 'TWO_WHEELER') {
      if (hours <= 1) price = 50;
      else if (hours > 1 && hours <= 3) price = 80;
      else if (hours > 3) price = 120;
    } else if (vehicleType === 'FOUR_WHEELER') {
      if (hours <= 1) price = 100;
      else if (hours > 1 && hours <= 3) price = 160;
      else if (hours > 3) price = 200;
    }
    return price;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const arrivalDateTime = new Date(formData.arrivalDate);
    const departureDateTime = new Date(formData.departureDate);
    const hours = Math.ceil((departureDateTime - arrivalDateTime) / (1000 * 60 * 60)); // Calculate the hours difference

    const calculatedPrice = calculatePrice(hours, formData.vehicleType);

    try {
      await axios.post('http://localhost:8080/bookings', {
        ...formData,
        parkingHours: hours,
        price: calculatedPrice,
      });
      alert('Booking successful!');
    } catch (error) {
      alert('Error during booking');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Parking</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookingDate" className="block text-gray-700 font-medium mb-2">
          Booking Date:
        </label>
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          value={formData.bookingDate}
          readOnly
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="arrivalDate" className="block text-gray-700 font-medium mb-2">
          Arrival Date and Time:
        </label>
        <input
          type="datetime-local"
          id="arrivalDate"
          name="arrivalDate"
          value={formData.arrivalDate}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="departureDate" className="block text-gray-700 font-medium mb-2">
          Departure Date and Time:
        </label>
        <input
          type="datetime-local"
          id="departureDate"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="vehicleNo" className="block text-gray-700 font-medium mb-2">
          Vehicle Number:
        </label>
        <input
          type="text"
          id="vehicleNo"
          name="vehicleNo"
          value={formData.vehicleNo}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="vehicleType" className="block text-gray-700 font-medium mb-2">
          Vehicle Type:
        </label>
        <select
          id="vehicleType"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="TWO_WHEELER">Two-Wheeler</option>
          <option value="FOUR_WHEELER">Four-Wheeler</option>
        </select>
        <label htmlFor="parkingHours" className="block text-gray-700 font-medium mb-2">
          Parking Hours:
        </label>
        <input
          type="number"
          id="parkingHours"
          name="parkingHours"
          value={Math.ceil((new Date(formData.departureDate) - new Date(formData.arrivalDate)) / (1000 * 60 * 60))}
          readOnly
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={calculatePrice(Math.ceil((new Date(formData.departureDate) - new Date(formData.arrivalDate)) / (1000 * 60 * 60)), formData.vehicleType)}
          readOnly
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookParking;
