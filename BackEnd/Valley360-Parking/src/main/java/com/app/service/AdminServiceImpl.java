package com.app.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.app.entities.User;
import com.app.exception.InvalidIdFoundException;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{
	
	@Override
	public String login(String email, String password) {
		if(((email.equals("Pratikshakavthale123@gmail.com")) || (email.equals("Darshan@gmail.com"))) && (((password.equals("Darshan2407")) || (password.equals("Pratiksha123"))))) {
			return email;
			
		}
		throw new RuntimeException("Invalid email or password");
	}

}
