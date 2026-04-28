package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.model.Customer;
import com.tsar.ai_calling_agent.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // ✅ GET ALL
    @GetMapping("/all")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    // ✅ ADD CUSTOMER
    @PostMapping("/add")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    // ✅ GET NEXT
    @GetMapping("/next")
    public Customer getNextCustomer() {
        return customerService.getNextCustomer();
    }

    // 🔥 MARK CALLING
    @PostMapping("/calling/{id}")
    public Customer markCalling(@PathVariable Long id) {
        return customerService.markAsCalling(id);
    }

    // 🔥 UPDATE AFTER CALL
    @PostMapping("/update")
    public Customer updateAfterCall(
            @RequestParam Long id,
            @RequestParam int duration,
            @RequestParam String status
    ) {
        return customerService.updateAfterCall(id, duration, status);
    }
}