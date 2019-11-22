package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtTokenUtil;
import com.example.demo.model.DAOUser;
import com.example.demo.model.JwtRequest;
import com.example.demo.model.JwtResponse;
import com.example.demo.model.UserDTO;
import com.example.demo.model.UserExist;
import com.example.demo.service.JwtUserDetailsService;

@RestController
@CrossOrigin
@RequestMapping("user")
public class JwtAuthenticationController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private JwtUserDetailsService userDetailsService;
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception{
		authenticate(authenticationRequest.getUsername(),authenticationRequest.getPassword());
		final UserDetails userDetails= userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody UserDTO user) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(user));
		
	}
	
	@RequestMapping(value = "/{username}", method = RequestMethod.GET)
	public DAOUser getUser(@PathVariable("username") String username ) {
		return userDetailsService.find(username);
	}
	
	@RequestMapping(value = "/usercheck/{username}", method = RequestMethod.GET)
	public UserExist check(@PathVariable("username") String username) {
		UserDetails userDetails= userDetailsService.loadUserByUsername(username);
		if(!(userDetails==null)) {
			UserExist userExist=new UserExist("true");
			return userExist;
		}
		UserExist userExist=new UserExist("false");
		return userExist;
		
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public void updateUser(@RequestBody DAOUser user) throws Exception {
		userDetailsService.update(user);
		
	}
	
	

	private void authenticate(String username, String password) throws Exception {
		// TODO Auto-generated method stub
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		
	}

}
