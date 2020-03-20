package com.tmnrp.portfolio.server.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.users.model.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
}
