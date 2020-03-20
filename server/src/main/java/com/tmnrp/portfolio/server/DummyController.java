package com.tmnrp.portfolio.server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DummyController {

	@ResponseBody
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Object getRoot() {
		return "root";
	}

	@ResponseBody
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public Object getUser() {
		return "user";
	}

	@ResponseBody
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public Object getAdmin() {
		return "admin";
	}
	
	@ResponseBody
	@RequestMapping(value = "/std", method = RequestMethod.GET)
	public Object getStd() {
		return "standard";
	}
}
