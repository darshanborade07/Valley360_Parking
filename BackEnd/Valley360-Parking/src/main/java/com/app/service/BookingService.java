package com.app.service;

import java.util.List;

import com.app.dto.BookingDTO;
import com.app.entities.Booking;

public interface BookingService {

	void bookParkingSlot(BookingDTO booking);
	
	List<Booking> viewBookingHistory(Long id);
}
