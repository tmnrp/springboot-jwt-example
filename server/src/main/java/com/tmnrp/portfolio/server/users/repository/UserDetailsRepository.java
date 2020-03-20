package com.tmnrp.portfolio.server.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.users.model.UserDetails;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {

}
