package com.tsar.ai_calling_agent.repository;

import com.tsar.ai_calling_agent.model.CallLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

public interface CallLogRepository extends JpaRepository<CallLog, Long> {

    Optional<CallLog> findByCallSid(String callSid);

    // 🔥 count previous attempts for a customer
    int countByCustomerId(Long customerId);

    // 🔥 check if currently calling
    boolean existsByCustomerIdAndStatus(Long customerId, String status);


    List<CallLog> findByStatus(String status);

    // 🔥 NEW: Retry failed calls
    List<CallLog> findByStatusAndAttemptNoLessThan(String status, int attemptNo);

    // 🔥 NEW: Get pending callbacks (future improvement)
    List<CallLog> findByStatusAndCallbackTimeIsNotNull(String status);
}