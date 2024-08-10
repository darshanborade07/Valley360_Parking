package com.app.service;

import java.util.List;

import com.app.dto.ParkingSlotDTO;
import com.app.entities.ParkingSlot;

public interface ParkingSlotService {

	ParkingSlot addNewParkingSlot(ParkingSlotDTO slot);
	
	//List<ParkingSlot> viewParkingSlot(Long id);
	
	List<ParkingSlotDTO> getParkingSlotsByParkingArea(Long parkingAreaId);
}
