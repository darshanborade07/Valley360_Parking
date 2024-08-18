package com.app.entities;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.app.enums.Status;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "parking_area")
public class ParkingArea extends BaseEntity{

	@Column(length = 30,nullable = false)
	private String area;
	
	@Column(length = 30,nullable = false)
	private String city;
	
	@Column(length = 30,nullable = false)
	private String pincode;
	
	@Column(nullable = false)
	private double latitude;
	
	@Column(nullable = false)
	private double longitude;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30,nullable = false)
	private Status status;

	@OneToOne(fetch = FetchType.EAGER ,cascade = {CascadeType.ALL})
	@JoinColumn(name = "owner_id", nullable = false)
	private User user;

	@OneToMany(mappedBy = "parking")
	private Set<ParkingSlot> parkingSlots;
	
	public ParkingArea() {
		super();
	}
	
	public ParkingArea(String area, String city, String pincode, double latitude, double longitude, Status status,
			Set<ParkingSlot> parkingSlots) {
		super();
		this.area = area;
		this.city = city;
		this.pincode = pincode;
		this.latitude = latitude;
		this.longitude = longitude;
		this.status = status;
		this.parkingSlots = parkingSlots;
	}

	
}
