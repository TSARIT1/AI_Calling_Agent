package com.tsar.ai_calling_agent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tsar.ai_calling_agent.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmployeeId(String employeeId);
}