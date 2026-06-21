package com.careerconnect.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "applications")
public class Application {


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private Long userId;

private Long jobId;

private Long recruiterId;

private String candidateName;

private String company;

private String position;

private String status;

public Application() {
}

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public Long getUserId() {
    return userId;
}

public void setUserId(Long userId) {
    this.userId = userId;
}

public Long getJobId() {
    return jobId;
}

public void setJobId(Long jobId) {
    this.jobId = jobId;
}

public Long getRecruiterId() {
    return recruiterId;
}

public void setRecruiterId(Long recruiterId) {
    this.recruiterId = recruiterId;
}

public String getCandidateName() {
    return candidateName;
}

public void setCandidateName(String candidateName) {
    this.candidateName = candidateName;
}

public String getCompany() {
    return company;
}

public void setCompany(String company) {
    this.company = company;
}

public String getPosition() {
    return position;
}

public void setPosition(String position) {
    this.position = position;
}

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}


}
