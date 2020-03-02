package com.tmnrp.portfolio.server.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.portfolio.server.users.models.Users;
import com.tmnrp.portfolio.server.users.pojos.UsersAuthenticateUserDTO;
import com.tmnrp.portfolio.server.users.repositories.UsersRepo;

@Controller
@RequestMapping(value = "/authenticate")
public class AuthenticationController {

	@Autowired
	UsersRepo usersRepo;

	@ResponseBody
	@RequestMapping(value = "/authenticateUser", method = RequestMethod.POST)
	public ResponseEntity<String> authenticateUser(@RequestBody UsersAuthenticateUserDTO authenticateUser) {
		Users user = usersRepo.findByEmail(authenticateUser.getEmail());
		return (user != null) && (user.getPassword().equals(authenticateUser.getPassword()))
				? new ResponseEntity<String>("SUCCESS", HttpStatus.OK)
				: new ResponseEntity<String>("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
	}
}
