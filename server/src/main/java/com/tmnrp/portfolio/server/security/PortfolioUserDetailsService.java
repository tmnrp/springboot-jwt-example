package com.tmnrp.portfolio.server.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tmnrp.portfolio.server.users.model.Users;
import com.tmnrp.portfolio.server.users.repository.UsersRepository;

@Service
public class PortfolioUserDetailsService implements UserDetailsService {

	@Autowired
	UsersRepository usersRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Users> user = usersRepository.findByUsername(username);
		if (user.isPresent()) {
			return new PortfolioUserDetails(user.get());
		} else {
			throw new UsernameNotFoundException("No user found with username: " + username);
		}
	}

}
