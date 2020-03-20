package com.tmnrp.portfolio.server.users.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NaturalId;

import com.tmnrp.portfolio.server.roles.model.Roles;

@Entity
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NaturalId
	@Email(message = "Should be a valid email")
	@NotNull(message = "Should not be null")
	private String email;

	@NotNull(message = "Should not be null")
	private String username;

	@NotNull(message = "Should not be null")
	private String password;

	@NotNull(message = "Should not be null")
	private Boolean active;

	@OneToOne
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "users_id_fk"), inverseJoinColumns = @JoinColumn(name = "roles_id_fk"))
	@NotNull(message = "Should not be null")
	private Roles role;

	@OneToOne
	@JoinTable(name = "users_user_details", joinColumns = @JoinColumn(name = "users_id_fk"), inverseJoinColumns = @JoinColumn(name = "user_details_id_fk"))
	@NotNull(message = "Should not be null")
	private UserDetails userDetail;

	public Users() {
	}

	public Users(@Email(message = "Should be a valid email") @NotNull(message = "Should not be null") String email,
			@NotNull(message = "Should not be null") String username,
			@NotNull(message = "Should not be null") String password,
			@NotNull(message = "Should not be null") Boolean active,
			@NotNull(message = "Should not be null") Roles role,
			@NotNull(message = "Should not be null") UserDetails userDetail) {
		super();
		this.email = email;
		this.username = username;
		this.password = password;
		this.active = active;
		this.role = role;
		this.userDetail = userDetail;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", email=" + email + ", username=" + username + ", password=" + password
				+ ", active=" + active + ", role=" + role + ", userDetail=" + userDetail + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public UserDetails getUserDetail() {
		return userDetail;
	}

	public void setUserDetail(UserDetails userDetail) {
		this.userDetail = userDetail;
	};

}
