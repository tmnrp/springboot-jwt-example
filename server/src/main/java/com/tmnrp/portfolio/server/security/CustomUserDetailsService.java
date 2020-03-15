package com.tmnrp.portfolio.server.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tmnrp.portfolio.server.users.models.Users;
import com.tmnrp.portfolio.server.users.repositories.UsersRepo;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	UsersRepo usersRepo;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
		// Let people login with either username or email
		Users user = usersRepo.findByUserNameOrEmail(usernameOrEmail, usernameOrEmail).orElseThrow(
				() -> new UsernameNotFoundException("User not found with username or email : " + usernameOrEmail));

		return UserPrincipal.create(user);
	}

	// This method is used by JWTAuthenticationFilter
	@Transactional
	public UserDetails loadUserById(Long id) {
		Users user = usersRepo.findById(id)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with id : " + id));

		return UserPrincipal.create(user);
	}

}
