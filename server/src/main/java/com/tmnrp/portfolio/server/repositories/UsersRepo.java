package com.tmnrp.portfolio.server.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.models.Users;

public interface UsersRepo extends JpaRepository<Users, UUID> {

}
