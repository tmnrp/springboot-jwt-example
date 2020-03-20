package com.tmnrp.portfolio.server.roles.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.portfolio.server.roles.model.Roles;
import com.tmnrp.portfolio.server.roles.repository.RolesRepository;

@Controller
@RequestMapping(value = "/roles")
public class RolesController {

	@Autowired
	RolesRepository rolesRepo;

	@ResponseBody
	@RequestMapping(value = "/getRoles", method = RequestMethod.GET)
	public Object getRoles() {
		return rolesRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/createRole", method = RequestMethod.POST)
	public Object createRole(@RequestBody Roles role) {
		rolesRepo.save(role);
		return "Role saved";
	}
}
