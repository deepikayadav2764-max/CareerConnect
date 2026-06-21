package com.careerconnect.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.careerconnect.entity.Job;


public interface JobRepository extends JpaRepository<Job, Long> {

	List<Job> findByRecruiterId(Long recruiterId);
}