package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.RabbitMQSender;
import com.example.demo.thread.Threads;



@RestController
@RequestMapping(value = "/thread/")
public class RabbitMQController {

	@Autowired
	RabbitMQSender rabbitMQSender;

	@PostMapping(value = "/create")
	public String producer(@RequestBody Threads t) {
	
	
	
		rabbitMQSender.send(t);

		return "Message sent to the RabbitMQ  Successfully";
	}

}
