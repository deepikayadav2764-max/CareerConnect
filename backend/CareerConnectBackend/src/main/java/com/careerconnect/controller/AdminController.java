package com.careerconnect.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.careerconnect.repository.ApplicationRepository;
import com.careerconnect.repository.JobRepository;
import com.careerconnect.repository.UserRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private ApplicationRepository applicationRepository;

    @GetMapping("/dashboard")
    public Map<String, Long> dashboard() {

        Map<String, Long> data = new HashMap<>();

        data.put(
            "totalUsers",
            userRepository.count()
        );

        data.put(
            "totalJobs",
            jobRepository.count()
        );

        data.put(
            "totalApplications",
            applicationRepository.count()
        );

        data.put(
            "totalCandidates",
            userRepository.countByRole("CANDIDATE")
        );

        data.put(
            "totalRecruiters",
            userRepository.countByRole("RECRUITER")
        );

        return data;
    }
    @DeleteMapping("/jobs/{id}")
    public String deleteJob(
            @PathVariable Long id) {

        jobRepository.deleteById(id);

        return "Job Deleted Successfully";
    }
}
