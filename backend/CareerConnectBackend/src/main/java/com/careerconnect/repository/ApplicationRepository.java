package com.careerconnect.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careerconnect.entity.Application;

public interface ApplicationRepository
        extends JpaRepository<Application, Long> {

    List<Application> findByUserId(Long userId);
    List<Application> findByRecruiterId(Long recruiterId);
    Optional<Application> findByUserIdAndJobId(
            Long userId,
            Long jobId
    );
}