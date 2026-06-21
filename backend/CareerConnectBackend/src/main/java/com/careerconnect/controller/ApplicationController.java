package com.careerconnect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.careerconnect.entity.Application;
import com.careerconnect.repository.ApplicationRepository;
import com.careerconnect.entity.User;
import com.careerconnect.repository.UserRepository;
@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = "*")
public class ApplicationController {
	@Autowired
	private ApplicationRepository applicationRepository;

	@Autowired
	private UserRepository userRepository;


	@PostMapping
	public Application applyJob(
	        @RequestBody Application application) {

	    User user = userRepository
	            .findById(application.getUserId())
	            .orElse(null);

	    if (user == null) {
	        return null;
	    }

	    if (!"CANDIDATE".equals(user.getRole())) {
	        return null;
	    }

	    Application existingApplication =
	            applicationRepository
	            .findByUserIdAndJobId(
	                    application.getUserId(),
	                    application.getJobId()
	            )
	            .orElse(null);

	    if (existingApplication != null) {

	        System.out.println("Already Applied");

	        return null;
	    }

	    application.setStatus("Pending");

	    return applicationRepository.save(application);
	}
    @GetMapping("/user/{userId}")
    public List<Application> getUserApplications(
            @PathVariable Long userId) {

        return applicationRepository.findByUserId(userId);
    }
    @PutMapping("/{id}/{status}")
    public Application updateStatus(
            @PathVariable Long id,
            @PathVariable String status) {

        Application application =
                applicationRepository.findById(id)
                .orElse(null);

        if (application == null) {
            return null;
        }

        application.setStatus(status);

        return applicationRepository.save(application);
    }
    @GetMapping
    public List<Application> getAllApplications() {

        return applicationRepository.findAll();

    }
    @GetMapping("/recruiter/{recruiterId}")
    public List<Application> getRecruiterApplications(
            @PathVariable Long recruiterId) {

        return applicationRepository
                .findByRecruiterId(recruiterId);
    }

}
