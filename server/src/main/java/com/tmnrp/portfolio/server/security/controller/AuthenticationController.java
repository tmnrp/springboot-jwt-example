package com.tmnrp.portfolio.server.security.controller;

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
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private PortfolioUserDetailsService portfolioUserDetailsService;

	@Autowired
	private JWTUtil jwtUtil;

	/*
	 * Provide:
	 * 1- username
	 * 2- password
	 */
	@ResponseBody
	@RequestMapping(value = "/auth", method = RequestMethod.POST)
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
