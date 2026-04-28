package com.tsar.ai_calling_agent.service;

import com.tsar.ai_calling_agent.model.Customer;
import com.tsar.ai_calling_agent.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepo;

    // ✅ ADD CUSTOMER
    public Customer addCustomer(Customer customer) {
        customer.setStatus("PENDING");
        customer.setCreatedAt(LocalDateTime.now());
        return customerRepo.save(customer);
    }

    // ✅ GET ALL
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    // ✅ GET NEXT (QUEUE)
//    public Customer getNextCustomer() {
//        return customerRepo.findFirstByStatus("PENDING")
//                .orElseThrow(() -> new RuntimeException("No customers left"));
//    }
    public Customer getNextCustomer() {

        return customerRepo.findFirstByStatus("PENDING")
                .orElse(null); // 🔥 instead of exception
    }

    // 🔥 MARK AS CALLING
    public Customer markAsCalling(Long id) {
        Customer c = customerRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        c.setStatus("CALLING");
        return customerRepo.save(c);
    }

    // 🔥 UPDATE AFTER CALL (FINAL STATUS)
    public Customer updateAfterCall(Long id, int duration, String status) {

        Customer c = customerRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        c.setLastCallDuration(duration);
        c.setStatus(status); // CALLED / FAILED

        return customerRepo.save(c);
    }
}