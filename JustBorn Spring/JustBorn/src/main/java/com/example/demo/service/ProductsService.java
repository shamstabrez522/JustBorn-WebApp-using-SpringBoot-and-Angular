package com.example.demo.service;

import java.sql.ResultSet;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Products;
import com.example.demo.persistence.ProductsPersistence;
@Service
public class ProductsService implements ProductsServiceDec{
	private ProductsPersistence pp;
	@Autowired
	public ProductsService(ProductsPersistence pp) {
		this.pp=pp;
	}
	@Override
	@Transactional
	public List<Products> allproducts() {
		
		return pp.findAll();
	}
	@Override
	@Transactional
	public Products byid(int product_id) {
		Products p = pp.findById(product_id).get();
		return p;
	}
	@Override
	@Transactional
	public void insetandupdate(Products products) {
		pp.save(products);		
	}
	@Override
	@Transactional
	public void delete(int product_id) {
		pp.deleteById(product_id);
	}
	@Override
	@Transactional
	public List<Products> search(String data) {
		return pp.findProducts(data);
	}
	@Override
	@Transactional
	public List<Products> search(int data) {
		return pp.findProducts(data);
	}
	public ResultSet cpuc() {
		System.out.println(pp.countd());
		return pp.countd();
	}
	@Override
	public List<Products> anySearch() {
		return pp.findAny();
	}
	@Override
	public int getCatCount(int c_id) {
		return pp.countCat(c_id);
	}
}
