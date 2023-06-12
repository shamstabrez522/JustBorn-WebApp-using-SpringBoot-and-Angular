package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Userdata;
import com.example.demo.persistence.UserdataPersistence;
@Service
public class UserdataService implements UserdataServiceDec {
	private UserdataPersistence up;
	@Autowired
	public UserdataService(UserdataPersistence up) {
		this.up=up;
	}
	@Override
	@Transactional
	public List<Userdata> alluserdata() {
		return up.findAll();
	}
	@Override
	@Transactional
	public Userdata byid(int userdata_id) {
		Userdata ud = up.findById(userdata_id).get();
		return ud;
	}
	@Override
	@Transactional
	public void insetandupdate(Userdata userdata) {
		up.save(userdata);
	}
	@Override
	@Transactional
	public void delete(int userdata_id) {
		up.deleteById(userdata_id);
	}
	@Override
	public List<Userdata> search(String data) {
		return up.findUserdata(data);
	}
	@Override
	public List<Userdata> search(int data) {
		// TODO Auto-generated method stub
		return up.findUserdata(data);
	}

}
