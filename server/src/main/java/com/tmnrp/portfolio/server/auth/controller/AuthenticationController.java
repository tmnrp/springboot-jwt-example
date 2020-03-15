package com.tmnrp.portfolio.server.auth.controller;

import java.net.URI;
import java.util.Collections;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.tmnrp.portfolio.server.exceptions.AppException;
import com.tmnrp.portfolio.server.payload.ApiResponse;
import com.tmnrp.portfolio.server.payload.JwtAuthenticationResponse;
import com.tmnrp.portfolio.server.payload.LoginRequest;
import com.tmnrp.portfolio.server.payload.SignUpRequest;
import com.tmnrp.portfolio.server.roles.RoleName;
import com.tmnrp.portfolio.server.roles.Roles;
import com.tmnrp.portfolio.server.roles.repositories.RolesRepo;
import com.tmnrp.portfolio.server.security.JwtTokenProvider;
import com.tmnrp.portfolio.server.users.models.Users;
import com.tmnrp.portfolio.server.users.repositories.UsersRepo;

@Controller
@RequestMapping(value = "/api/auth")
public class AuthenticationController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UsersRepo userRepository;

	@Autowired
	RolesRepo roleRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	JwtTokenProvider tokenProvider;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsernameOrEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		if (userRepository.existsByUserName(signUpRequest.getUsername())) {
			return new ResponseEntity(new ApiResponse(false, "Username is already taken!"), HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"), HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		Users user = new Users(signUpRequest.getName(), signUpRequest.getUsername(), signUpRequest.getEmail(),
				signUpRequest.getPassword());

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		Roles userRole = roleRepository.findByName(RoleName.ROLE_USER)
				.orElseThrow(() -> new AppException("User Role not set."));

		user.setRoles(Collections.singleton(userRole));

		Users result = userRepository.save(user);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/users/{username}")
				.buildAndExpand(result.getUserName()).toUri();

		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
	}
}
