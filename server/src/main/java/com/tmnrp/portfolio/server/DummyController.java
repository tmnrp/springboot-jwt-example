package com.tmnrp.portfolio.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.portfolio.server.authenticate.pojo.AuthenticationRequest;
import com.tmnrp.portfolio.server.authenticate.pojo.AuthenticationResponse;
import com.tmnrp.portfolio.server.jwt.JWTUtil;
import com.tmnrp.portfolio.server.security.PortfolioUserDetailsService;

@Controller
public class DummyController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PortfolioUserDetailsService portfolioUserDetailsService;

	@Autowired
	private JWTUtil jwtUtil;

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

	@ResponseBody
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException ex) {
			throw new Exception("Bad credentitials.");
		}

		final UserDetails userDetails = portfolioUserDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());

		final String JWT_STRING = jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(JWT_STRING));
	}
}
