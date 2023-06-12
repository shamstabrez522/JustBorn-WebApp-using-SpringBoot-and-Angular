package com.example.demo.controller;

public class AdminCount {
	private int c_id;
	private String c_list;
	private int count;
	public AdminCount() {}
	public AdminCount(int c_id, String c_list, int count) {
		this.c_id = c_id;
		this.c_list = c_list;
		this.count = count;
	}
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public String getC_list() {
		return c_list;
	}
	public void setC_list(String c_list) {
		this.c_list = c_list;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	@Override
	public String toString() {
		return "AdminCount [c_id=" + c_id + ", c_list=" + c_list + ", count=" + count + "]";
	}
	
}
