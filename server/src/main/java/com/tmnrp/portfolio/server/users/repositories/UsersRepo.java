package com.tmnrp.portfolio.server.users.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.users.models.Users;

public interface UsersRepo extends JpaRepository<Users, Long> {

	Users findByEmail(String email);

}
