package com.careerconnect.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "*")
public class FileUploadController {


	@PostMapping("/photo")
	public String uploadPhoto(
	        @RequestParam("file") MultipartFile file)
	        throws IOException {

	    String uploadDir =
	            System.getProperty("user.dir")
	            + "/uploads/photos/";

	    File folder = new File(uploadDir);

	    if (!folder.exists()) {
	        folder.mkdirs();
	    }

	    String fileName =
	            file.getOriginalFilename();

	    File destination =
	            new File(uploadDir + fileName);

	    file.transferTo(destination);

	    return "uploads/photos/" + fileName;
	}

	@PostMapping("/resume")
	public String uploadResume(
	        @RequestParam("file") MultipartFile file)
	        throws IOException {

	    String uploadDir =
	            System.getProperty("user.dir")
	            + "/uploads/resumes/";

	    File folder = new File(uploadDir);

	    if (!folder.exists()) {
	        folder.mkdirs();
	    }

	    String fileName =
	            file.getOriginalFilename();

	    File destination =
	            new File(uploadDir + fileName);

	    file.transferTo(destination);

	    return "uploads/resumes/" + fileName;
	}


}
