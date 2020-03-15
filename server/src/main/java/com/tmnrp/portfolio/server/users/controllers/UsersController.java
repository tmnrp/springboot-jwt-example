package com.tmnrp.portfolio.server.users.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
