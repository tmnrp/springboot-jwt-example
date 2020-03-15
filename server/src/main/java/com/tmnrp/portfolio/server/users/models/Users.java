package com.tmnrp.portfolio.server.users.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;

import com.tmnrp.portfolio.server.audit.DateAudit;
import com.tmnrp.portfolio.server.roles.Roles;
import com.tmnrp.portfolio.server.users.UsersConstants;

@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = { "user_name" }),
		@UniqueConstraint(columnNames = { "email" }) })
public class Users extends DateAudit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 40)
	private String name;

	@Column(name = "user_name")
	@Size(max = 25)
	private String userName;

	@NaturalId
	@Email(message = "Should be a valid email")
	@NotBlank(message = UsersConstants.SHOULD_NOT_BE_BLANK)
	@Size(max = 40)
	private String email;

	@NotBlank(message = UsersConstants.SHOULD_NOT_BE_BLANK)
	@Size(max = 100)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "users_id_fk"), inverseJoinColumns = @JoinColumn(name = "roles_id_fk"))
	private Set<Roles> roles = new HashSet<>();

	public Users() {
	}

	public Users(@NotBlank @Size(max = 40) String name, @Size(max = 25) String userName,
			@Email(message = "Should be a valid email") @NotBlank(message = "Should not be blank") @Size(max = 40) String email,
			@NotBlank(message = "Should not be blank") @Size(max = 100) String password) {
		this.name = name;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Roles> getRoles() {
		return roles;
	}

	public void setRoles(Set<Roles> roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", name=" + name + ", userName=" + userName + ", email=" + email + ", password="
				+ password + ", roles=" + roles + "]";
	}

}
