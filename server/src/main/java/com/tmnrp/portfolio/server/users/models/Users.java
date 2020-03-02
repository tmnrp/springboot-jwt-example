package com.tmnrp.portfolio.server.users.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Type;

import com.tmnrp.portfolio.server.enums.Gender;
import com.tmnrp.portfolio.server.users.UsersConstants;

@Entity
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "first_name")
	@NotBlank(message = UsersConstants.SHOULD_NOT_BE_BLANK)
	private String firstName;

	@Column(name = "middle_name")
	private String middleName;

	@Column(name = "last_name")
	@NotBlank(message = UsersConstants.SHOULD_NOT_BE_BLANK)
	private String lastName;

	@Column(name = "user_name")
	private String userName;

	@Email(message = "Should be a valid email")
	@NotBlank(message = UsersConstants.SHOULD_NOT_BE_BLANK)
	private String email;

	@NotBlank(message = UsersConstants.SHOULD_NOT_BE_BLANK)
	private String password;

	private Long mobile;

	@Type(type = "date")
	private Date dob;

	@Enumerated
	@Column(columnDefinition = "smallint")
	private Gender gender;

	@Column(name = "created_at")
	@NotNull
	private Date createdAt;

	@Column(name = "created_by")
	private Long createdBy;

	@Column(name = "modified_at")
	private Date modifiedAt;

	@Column(name = "modified_by")
	private Long modifiedBy;

	public Users() {
		super();
	}

	public Users(String firstName, String middleName, String lastName, String userName,
			@Email(message = "Should be a valid email") @NotBlank(message = "Should not be blank") String email,
			@NotBlank(message = "Should not be blank") String password, Long mobile, Date dob, Gender gender,
			Date createdAt, Long createdBy, Date modifiedAt, Long modifiedBy) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.dob = dob;
		this.gender = gender;
		this.createdAt = createdAt;
		this.createdBy = createdBy;
		this.modifiedAt = modifiedAt;
		this.modifiedBy = modifiedBy;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	public Date getModifiedAt() {
		return modifiedAt;
	}

	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}

	public Long getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(Long modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	@Override
	public String toString() {
		return "Users [firstName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName + ", userName="
				+ userName + ", email=" + email + ", password=" + password + ", mobile=" + mobile + ", dob=" + dob
				+ ", gender=" + gender + ", createdAt=" + createdAt + ", createdBy=" + createdBy + ", modifiedAt="
				+ modifiedAt + ", modifiedBy=" + modifiedBy + "]";
	}

}
