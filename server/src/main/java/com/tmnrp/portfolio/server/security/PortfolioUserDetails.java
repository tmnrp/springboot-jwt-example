package com.tmnrp.portfolio.server.security;

import java.util.Arrays;
import java.util.Collection;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.tmnrp.portfolio.server.roles.model.Roles;
import com.tmnrp.portfolio.server.users.model.Users;

public class PortfolioUserDetails implements UserDetails {

	private Users user;

	public PortfolioUserDetails() {
	}

	public PortfolioUserDetails(Users user) {
		this.user = new Users(user.getEmail(), user.getUsername(), user.getPassword(), user.getActive(), user.getRole(),
				user.getUserDetail());
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Roles role = user.getRole();
		return Arrays.asList(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return user.getActive();
	}

}
