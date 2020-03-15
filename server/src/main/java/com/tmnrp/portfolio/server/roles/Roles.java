package com.tmnrp.portfolio.server.roles;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "roles")
public class Roles {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Enumerated(EnumType.STRING)
	@NaturalId
	private RoleName name;

	public Roles() {
	}

	public RoleName getName() {
		return name;
	}

	public void setName(RoleName name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Roles [id=" + id + ", name=" + name + "]";
	}

}
