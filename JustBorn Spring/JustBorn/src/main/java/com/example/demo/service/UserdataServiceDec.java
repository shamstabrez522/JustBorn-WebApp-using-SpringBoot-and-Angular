package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Userdata;

public interface UserdataServiceDec {
	public List<Userdata> alluserdata();

	public Userdata byid(int userdata_id);

	public void insetandupdate(Userdata userdata);

	public void delete(int userdata_id);
	
	public List<Userdata> search(String data);
	
	public List<Userdata> search(int data);
}
