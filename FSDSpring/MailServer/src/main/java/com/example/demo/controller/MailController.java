package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.model.service.MailService;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api")
public class MailController {
	
	@Autowired
	private MailService notificationService;

	@Autowired
	private User user;

	/**
	 * 
	 * @return
	 */
	@GetMapping("send-mail")
	public String send(@RequestParam String email) {

		/*
		 * Creating a User with the help of User class that we have declared and setting
		 * Email address of the sender.
		 */
		user.setEmailAddress(email);  //Receiver's email address
		/*
		 * Here we will call sendEmail() for Sending mail to the sender.
		 */
		try {
			notificationService.sendEmail(user);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}
}
