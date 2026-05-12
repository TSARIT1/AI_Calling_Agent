package com.tsar.ai_calling_agent.controller;

import com.tsar.ai_calling_agent.model.User;
import com.tsar.ai_calling_agent.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    // ================= GET ALL USERS =================

    @GetMapping("/all")
    public List<User> getAllUsers() {

        return userRepo.findAll();
    }

    // ================= DELETE USER =================

    @DeleteMapping("/{id}")
    public String deleteUser(
            @PathVariable Long id
    ) {

        userRepo.deleteById(id);

        return "User Deleted";
    }
}