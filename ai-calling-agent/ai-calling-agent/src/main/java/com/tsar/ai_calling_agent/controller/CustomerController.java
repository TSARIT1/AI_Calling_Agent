//package com.tsar.ai_calling_agent.controller;
//
//import com.tsar.ai_calling_agent.model.Customer;
//import com.tsar.ai_calling_agent.service.CustomerService;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/customers")
//@CrossOrigin(origins = "http://localhost:5173")
//public class CustomerController {
//
//    @Autowired
//    private CustomerService customerService;
//
//    // ✅ GET ALL
//    @GetMapping("/all")
//    public List<Customer> getAllCustomers() {
//        return customerService.getAllCustomers();
//    }
//
//    // ✅ ADD CUSTOMER
//    @PostMapping("/add")
//    public Customer addCustomer(@RequestBody Customer customer) {
//        return customerService.addCustomer(customer);
//    }
//
//    // ✅ GET NEXT
//    @GetMapping("/next")
//    public Customer getNextCustomer() {
//        return customerService.getNextCustomer();
//    }
//
//    // 🔥 MARK CALLING
//    @PostMapping("/calling/{id}")
//    public Customer markCalling(@PathVariable Long id) {
//        return customerService.markAsCalling(id);
//    }
//
//    // 🔥 UPDATE AFTER CALL
//    @PostMapping("/update")
//    public Customer updateAfterCall(
//            @RequestParam Long id,
//            @RequestParam int duration,
//            @RequestParam String status
//    ) {
//        return customerService.updateAfterCall(id, duration, status);
//    }
//}

package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.model.Customer;
import com.tsar.ai_calling_agent.service.CustomerService;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // ================= GET ALL =================

    @GetMapping("/all")
    public List<Customer> getAllCustomers() {

        return customerService.getAllCustomers();
    }

    // ================= ADD SINGLE CUSTOMER =================

    @PostMapping("/add")
    public Customer addCustomer(
            @RequestBody Customer customer
    ) {

        return customerService.addCustomer(customer);
    }

    // ================= CSV UPLOAD =================

    @PostMapping("/upload")
    public String uploadCsv(
            @RequestParam("file") MultipartFile file
    ) {

        try (

                Reader reader = new InputStreamReader(
                        file.getInputStream()
                );

                CSVParser csvParser = new CSVParser(
                        reader,
                        CSVFormat.DEFAULT
                                .withFirstRecordAsHeader()
                                .withIgnoreHeaderCase()
                                .withTrim()
                )

        ) {

            for (CSVRecord record : csvParser) {

                Customer customer = new Customer();

                customer.setName(
                        record.get("name")
                );

                customer.setPhone(
                        record.get("phone")
                );

                // OPTIONAL EMAIL
                if (record.isMapped("email")) {

                    customer.setEmail(
                            record.get("email")
                    );
                }

                customerService.addCustomer(customer);
            }

            return "CSV Uploaded Successfully";

        } catch (Exception e) {

            e.printStackTrace();

            return "Failed to Upload CSV";
        }
    }

    // ================= GET NEXT CUSTOMER =================

    @GetMapping("/next")
    public Customer getNextCustomer() {

        return customerService.getNextCustomer();
    }

    // ================= MARK AS CALLING =================

    @PostMapping("/calling/{id}")
    public Customer markCalling(
            @PathVariable Long id
    ) {

        return customerService.markAsCalling(id);
    }

    // ================= GET CUSTOMERS BY USER =================

    @GetMapping("/user/{userId}")
    public List<Customer> getCustomersByUser(
            @PathVariable Long userId
    ) {

        return customerService.getCustomersByUser(
                userId
        );
    }

    // ================= UPDATE AFTER CALL =================

    @PostMapping("/update")
    public Customer updateAfterCall(

            @RequestParam Long id,

            @RequestParam int duration,

            @RequestParam String status

    ) {

        return customerService.updateAfterCall(
                id,
                duration,
                status
        );
    }
}