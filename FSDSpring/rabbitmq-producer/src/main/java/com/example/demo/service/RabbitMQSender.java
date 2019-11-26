package com.example.demo.service;


import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.demo.thread.Threads;



@Service
public class RabbitMQSender {
	
	@Autowired
	private AmqpTemplate amqpTemplate;
	
	@Value("${foo.rabbitmq.exchange}")
	private String exchange;
	
	@Value("${foo.rabbitmq.routingkey}")
	private String routingkey;	
	//String kafkaTopic = "java_in_use_topic";
	
	public void send(Threads thread) {
		amqpTemplate.convertAndSend(exchange, routingkey, thread);
		
	    
	}
}