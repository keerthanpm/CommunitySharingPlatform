package com.example.demo.model;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class JwtResponse implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5517988254951293834L;

	private final String jwttoken;

}
