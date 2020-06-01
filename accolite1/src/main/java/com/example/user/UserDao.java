package com.example.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
@RestController
public class UserDao {
	
	@Autowired
	private JdbcTemplate jdbc;
	
	
	@RequestMapping
	public List<User> getAllUser(){
		System.out.println("reached");
		String query = "select * from users";
		List<User> a = jdbc.query(query,new UserRowMapper());
		return a;
	}
	
	@PostMapping("/add")
	public String addUser(@RequestBody User currentUser) {
		System.out.println(currentUser);
		String addQuery = "insert into users(name,email,password) " + "values('"+ currentUser.getName()+"','"+currentUser.getEmail()+"','"+currentUser.getPassword()+"')";
		jdbc.execute(addQuery);
		return "successful";
	}
	
	@GetMapping("/{id}")
	public User getUserById(@PathVariable("id") int id) {
		String query = "select * from users where id ="+id;
		User currentUser = jdbc.queryForObject(query, new UserRowMapper());
		return currentUser;
		
	}
	
	@PutMapping("/{id}")
	public String updateUser(@PathVariable("id") int id, @RequestBody User changeUser) {
		String query = "update users set id="+id+" ,name='"+changeUser.getName()+"' ,email='"+changeUser.getEmail()+"' ,password='"+changeUser.getPassword()+"' where id ="+id;
		jdbc.execute(query);
		return "Update successful";
	}

	@DeleteMapping("/{id}")
	public String delUser(@PathVariable("id") int id) {
		jdbc.execute("delete from users where id="+id);
		return "deleted successfully";
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User currentUser ) {
		System.out.println("yoooo");
		String query = "select * from users where email='"+currentUser.getEmail()+"' and  password='"+currentUser.getPassword()+"' limit 1";
		List<User> a = jdbc.query(query, new UserRowMapper());
		if (a.isEmpty()) {
			return null;
		}
		System.out.println();
		return a.get(0);
//		return "sdfsdfsdf";
	}
	
//to add makeAdmin
	
	
}
