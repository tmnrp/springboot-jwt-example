package com.tmnrp.portfolio.server.users.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.portfolio.server.users.models.Users;

public interface UsersRepo extends JpaRepository<Users, Long> {

	List<Users> findByIdIn(List<Long> userIds);

	Optional<Users> findByUserName(String userName);

	Optional<Users> findByEmail(String email);

	Optional<Users> findByUserNameOrEmail(String userName, String email);

	Boolean existsByUserName(String userName);

	Boolean existsByEmail(String email);

}
