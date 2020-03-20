package com.tmnrp.portfolio.server.users.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.portfolio.server.roles.model.Roles;
import com.tmnrp.portfolio.server.roles.repository.RolesRepository;
import com.tmnrp.portfolio.server.users.model.UserDetails;
import com.tmnrp.portfolio.server.users.model.Users;
import com.tmnrp.portfolio.server.users.pojo.CreateUserPOJO;
import com.tmnrp.portfolio.server.users.repository.UserDetailsRepository;
import com.tmnrp.portfolio.server.users.repository.UsersRepository;

@Controller
@RequestMapping(value = "/users")
public class UsersController {

	@Autowired
	UsersRepository usersRepo;

	@Autowired
	RolesRepository rolesRepo;

	@Autowired
	UserDetailsRepository userDetailsRepo;

	@ResponseBody
	@RequestMapping(value = "/getUsers", method = RequestMethod.GET)
	public Object getUsers() {
		return usersRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/createUser", method = RequestMethod.POST)
	public Object createUser(@RequestBody CreateUserPOJO userPOJO) {
		Optional<Roles> role = rolesRepo.findById(userPOJO.getRoleId());

		UserDetails userDetail = new UserDetails(userPOJO.getFirstName(), userPOJO.getMiddleName(),
				userPOJO.getLastName(), userPOJO.getDob(), userPOJO.getCountry(), userPOJO.getState(),
				userPOJO.getCity(), userPOJO.getPincode(), userPOJO.getAddress());
		userDetailsRepo.save(userDetail);

		Users user = new Users(userPOJO.getEmail(), userPOJO.getUsername(), userPOJO.getPassword(),
				userPOJO.getActive(), role.get(), userDetail);
		usersRepo.save(user);
		return "User saved";
	}
}
