package com.example.demo.service;

import java.sql.ResultSet;
import java.util.List;

import com.example.demo.controller.AdminCount;
import com.example.demo.entity.Products;

public interface ProductsServiceDec {
	public List<Products> allproducts();

	public Products byid(int product_id);

	public void insetandupdate(Products products);

	public void delete(int product_id);

	public List<Products> search(String data);
	
	public List<Products> search(int data);

	public ResultSet cpuc();
	
	public List<Products> anySearch();
	
	public int getCatCount(int c_id);
}
