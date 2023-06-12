package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Userdata;
import com.example.demo.service.UserdataService;

@RestController
@RequestMapping("/userdata")
public class UserdataController {
	private UserdataService us;

	@Autowired
	public UserdataController(UserdataService us) {
		this.us = us;
	}

	@GetMapping("/userdatalist")
	public List<Userdata> fetchAll() {
		return us.alluserdata();
	}

	@GetMapping("/userdatalist/{userdata_id}")
	public Userdata getId(@PathVariable int userdata_id) {
		Userdata ud = us.byid(userdata_id);
		if (ud == null)
			throw new RuntimeException("Not Exsisted !");
		return ud;
	}

	@PostMapping("/userdatalist")
	public void insertUserdata(@RequestBody Userdata userdata) {
		userdata.setU_id(0);
		us.insetandupdate(userdata);
	}

	@PutMapping("/userdatalist")
	public void updateUserdata(@RequestBody Userdata userdata) {
		us.insetandupdate(userdata);
	}

	@DeleteMapping("/userdatalist/{userdata_id}")
	public List<Userdata> deleteById(@PathVariable int userdata_id) {
		Userdata ud = us.byid(userdata_id);
		if (ud == null)
			throw new RuntimeException("Not Exsisted !");
		us.delete(userdata_id);
		return fetchAll();
	}

	@GetMapping("/search/{value}")
	public List<Userdata> check(@PathVariable String value) {
		String regex = "[0-9]*";
		if (value.matches(regex)) {
			int data = Integer.parseInt(value);
			return searchAll(data);
		} else
			return searchAll(value);

	}

	public List<Userdata> searchAll(String data) {
		List<Userdata> ulist = us.search(data);
		return ulist;
	}

	public List<Userdata> searchAll(int data) {
		List<Userdata> ulist = us.search(data);
		return ulist;
	}
}
