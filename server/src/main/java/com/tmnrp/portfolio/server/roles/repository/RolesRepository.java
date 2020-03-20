package com.tmnrp.portfolio.server.roles.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.roles.model.Roles;

public interface RolesRepository extends JpaRepository<Roles, Long> {

}
