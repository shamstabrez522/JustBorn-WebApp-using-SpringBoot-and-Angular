package com.example.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "categories")
public class Categories {
	@Id
	@Column(name = "c_id")
	private Integer c_id;
	@Column(name = "c_list")
	private String c_list;
	private int count;

	@OneToMany(mappedBy = "categories")
	private Set<Products> products;

	public Categories() {
	}

	public Categories(Integer c_id, String c_list, int count) {
		this.c_id = c_id;
		this.c_list = c_list;
		this.count = count;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public Integer getC_id() {
		return c_id;
	}

	public void setC_id(Integer c_id) {
		this.c_id = c_id;
	}

	public String getC_list() {
		return c_list;
	}

	public void setC_list(String c_list) {
		this.c_list = c_list;
	}

	@Override
	public String toString() {
		return "Categories [c_id=" + c_id + ", c_list=" + c_list + "]";
	}
}
