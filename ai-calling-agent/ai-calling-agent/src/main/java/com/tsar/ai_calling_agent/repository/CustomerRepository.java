//package com.tsar.ai_calling_agent.repository;
//
//import com.tsar.ai_calling_agent.model.Customer;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.Optional;
//
//public interface CustomerRepository extends JpaRepository<Customer, Long> {
//
//    Optional<Customer> findFirstByStatus(String status);
//
//}

package com.tsar.ai_calling_agent.repository;

import com.tsar.ai_calling_agent.model.Customer;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository
        extends JpaRepository<Customer, Long> {

    Optional<Customer> findFirstByStatus(
            String status
    );

    // 🔥 USER SPECIFIC CUSTOMERS

    List<Customer> findByAssignedUserId(
            Long assignedUserId
    );
}