package com.careerconnect.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.careerconnect.entity.User;
import com.careerconnect.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User register(
            @RequestBody User user) {

        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User login(
            @RequestBody User user) {

        User existingUser =
                userRepository
                .findByEmail(user.getEmail())
                .orElse(null);

        if (existingUser == null) {
            return null;
        }

        if (!existingUser.getPassword()
                .equals(user.getPassword())) {
            return null;
        }

        return existingUser;
    }
}