package com.app.dto;

import com.app.enums.Status;
import com.app.enums.VehicleType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ParkingSlotDTO {
	
	private Long id;
	private VehicleType vehicleType;
	private Status status;
	private double price;
	private Long parkingId;
	
	public ParkingSlotDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public ParkingSlotDTO(Long id, Long parkingId) {
		this.id = id;
		this.parkingId = parkingId;
	}
	
	public VehicleType getVehicleType() {
		return vehicleType;
	}
	public void setVehicleType(VehicleType vehicleType) {
		this.vehicleType = vehicleType;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getParkingId() {
		return parkingId;
	}
	public void setParkingId(Long parkingId) {
		this.parkingId = parkingId;
	}
	
	
}
