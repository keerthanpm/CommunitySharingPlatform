package com.example.demo.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class JwtRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5152398456600097660L;
	
	private String username;
	private String password;

}
