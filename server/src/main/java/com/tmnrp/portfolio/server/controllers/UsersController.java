package com.tmnrp.portfolio.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.portfolio.server.UsersDTO;
import com.tmnrp.portfolio.server.models.Users;
import com.tmnrp.portfolio.server.repositories.UsersRepo;

@Controller
public class UsersController {

	@Autowired
	UsersRepo usersRepo;

	@Autowired
	UsersRepo users;

	@ResponseBody
	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public Object getAllUsers() {
		return users.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/insertUser", method = RequestMethod.POST)
	public Object insertUser(@RequestBody UsersDTO userParams) {
		Users user = new Users(userParams.getFirstName(), userParams.getMiddleName(), userParams.getLastName(),
				userParams.getUserName(), userParams.getPassword(), userParams.getMobile(), userParams.getDob(),
				userParams.getGender());
		usersRepo.save(user);
		return "User inserted";
	}
}
