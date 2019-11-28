package com.example.demo.service;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.Threads;

@Service
public class RabbitMQConsumerService {
	
	private static final String QUEUE = "foo.queue";
	 private  RestTemplate restTemplate;
	 
	 

	@RabbitListener(queues = QUEUE)
	public void receiveMessage(Threads t) {
		restTemplate =new RestTemplate();
		System.out.println("Received Message from foo-queue Queue >>" + t.getPost());
		String url = "https://thread-service.herokuapp.com/thread/create";

	    // create headers
	    HttpHeaders headers = new HttpHeaders();
	    // set `content-type` header
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    // set `accept` header
	    headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

	    // create a map for post parameters
	    

	    // build the request
	    HttpEntity<Threads> entity = new HttpEntity<>(t, headers);

	    // send POST request
	     restTemplate.postForObject(url, entity, Threads.class);
	}
}