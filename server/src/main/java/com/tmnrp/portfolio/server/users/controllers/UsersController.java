package com.tmnrp.portfolio.server.users.controllers;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.portfolio.server.users.models.Users;
import com.tmnrp.portfolio.server.users.pojos.UsersDTO;
import com.tmnrp.portfolio.server.users.repositories.UsersRepo;

@Controller
@RequestMapping(value = "/users")
public class UsersController {

	@Autowired
	UsersRepo usersRepo;

	@ResponseBody
	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public Object getAllUsers() {
		return usersRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST)
	public Object insertUser(@RequestBody UsersDTO userParams) {
		Users user = new Users(userParams.getFirstName(), userParams.getMiddleName(), userParams.getLastName(),
				userParams.getUserName(), userParams.getEmail(), userParams.getPassword(), userParams.getMobile(),
				userParams.getDob(), userParams.getGender(), new Date(), userParams.getCreatedBy(),
				userParams.getModifiedAt(), userParams.getModifiedBy());
		usersRepo.save(user);
		return "User inserted";
	}
}
