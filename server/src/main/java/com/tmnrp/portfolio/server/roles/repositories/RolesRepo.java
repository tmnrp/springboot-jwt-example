package com.tmnrp.portfolio.server.roles.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.roles.RoleName;
import com.tmnrp.portfolio.server.roles.Roles;

public interface RolesRepo extends JpaRepository<Roles, Long> {

	Optional<Roles> findByName(RoleName roleName);
}
