package com.app.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.app.enums.Status;
import com.app.enums.VehicleType;

import lombok.ToString;

@Entity
@Table(name = "parking_slots")
@ToString
public class ParkingSlot {
	
	@Id
	private Long id;
	@Enumerated(EnumType.STRING)
	private VehicleType vehicleType;
	@Enumerated(EnumType.STRING)
	private Status status;
	private double price;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "parking_id")
	private ParkingArea parking;
	
	public ParkingSlot() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public ParkingSlot(Long id,VehicleType vehicleType, Status status) {
		this.id = id;
		this.vehicleType = vehicleType;
		this.status = status;
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

	public ParkingArea getParking() {
		return parking;
	}

	public void setParking(ParkingArea parking) {
		this.parking = parking;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParkingSlot slot = (ParkingSlot) o;
        return Objects.equals(id, slot.id) &&
               Objects.equals(parking.getId(), slot.parking.getId());
    }

	@Override
	public int hashCode() {
	    return Objects.hash(id, parking != null ? parking.getId() : null);
	}

	
	
}
