package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.ParkingSlot;

public interface ParkingSlotRepository extends JpaRepository<ParkingSlot, Long> {

//	@Query("SELECT ps FROM ParkingSlot ps ORDER BY ps.city ASC")
//	List<ParkingSlot> findAllSortedByCity();
	
	@Query("SELECT ps FROM ParkingSlot ps ORDER BY ps.price ASC")
	List<ParkingSlot> findAllSortedByPriceAsc();
	
	// Sorting by Area (Nested Query)
	@Query("SELECT ps FROM ParkingSlot ps JOIN FETCH ps.parking pa ORDER BY pa.city ASC")
	List<ParkingSlot> findAllByOrderByCityAsc();

	
}
