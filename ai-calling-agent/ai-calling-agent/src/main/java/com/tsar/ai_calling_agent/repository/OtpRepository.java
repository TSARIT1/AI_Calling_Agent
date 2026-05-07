package com.tsar.ai_calling_agent.repository;

import com.tsar.ai_calling_agent.model.OtpEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpRepository
        extends JpaRepository<OtpEntity, Long> {

    Optional<OtpEntity> findByEmail(String email);
}