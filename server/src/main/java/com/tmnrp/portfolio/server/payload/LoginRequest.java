package com.tmnrp.portfolio.server.payload;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
	private String userNameOrEmail;

	@NotBlank
	private String password;

	public String getUsernameOrEmail() {
		return userNameOrEmail;
	}

	public void setUsernameOrEmail(String usernameOrEmail) {
		this.userNameOrEmail = usernameOrEmail;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
