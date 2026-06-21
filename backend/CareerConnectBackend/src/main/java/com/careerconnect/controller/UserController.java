package com.careerconnect.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.careerconnect.entity.User;
import com.careerconnect.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public User getUserById(
            @PathVariable Long id) {

        return userRepository.findById(id)
                .orElse(null);
    }

    @PutMapping("/{id}")
    public User updateUser(
            @PathVariable Long id,
            @RequestBody User updatedUser) {

        Optional<User> optionalUser =
                userRepository.findById(id);

        if (optionalUser.isPresent()) {

            User user = optionalUser.get();

            user.setFullName(
                    updatedUser.getFullName());

            user.setEmail(
                    updatedUser.getEmail());

            user.setPhone(
                    updatedUser.getPhone());

            user.setLocation(
                    updatedUser.getLocation());

            user.setAbout(
                    updatedUser.getAbout());

            user.setSkills(
                    updatedUser.getSkills());

            // Profile Photo
            user.setProfilePhoto(
                    updatedUser.getProfilePhoto());

            // Resume
            user.setResume(
                    updatedUser.getResume());

            return userRepository.save(user);
        }

        return null;
    }

    @GetMapping
    public java.util.List<User> getAllUsers() {

        return userRepository.findAll();

    }

    @DeleteMapping("/{id}")
    public String deleteUser(
            @PathVariable Long id) {

        userRepository.deleteById(id);

        return "User Deleted Successfully";

    }
    @PutMapping("/change-password/{id}")
    public String changePassword(
            @PathVariable Long id,
            @RequestBody Map<String, String> request) {

        Optional<User> optionalUser =
                userRepository.findById(id);

        if (optionalUser.isPresent()) {

            User user = optionalUser.get();

            String oldPassword =
                    request.get("oldPassword");

            String newPassword =
                    request.get("newPassword");

            if (!user.getPassword().equals(oldPassword)) {
                return "Old Password Incorrect";
            }

            user.setPassword(newPassword);

            userRepository.save(user);

            return "Password Updated Successfully";
        }

        return "User Not Found";
    }

}