package com.example.demo.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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

import com.example.demo.entity.Products;
import com.example.demo.service.ProductsService;
@RestController
@RequestMapping("/products")
public class ProductsController {
	private ProductsService ps;
	@Autowired
	public ProductsController(ProductsService ps) {
		this.ps=ps;
	}
	@GetMapping("/productslist")
	public List<Products> fetchAll(){
		return ps.allproducts();
	}
	@GetMapping("/productslist/{product_id}")
	public Products getId(@PathVariable int product_id) {
		Products p = ps.byid(product_id);
		if(p==null) 
			throw new RuntimeException("Not Exsisted !");
		return p;
	}
	@PostMapping("/productslist")
	public void insertProducts(@RequestBody Products products){
		products.setP_id(0);
		ps.insetandupdate(products);
	}
	@PutMapping("/productslist")
	public void updateProducts(@RequestBody Products products) {
		ps.insetandupdate(products);
	}
	@DeleteMapping("/productslist/{product_id}")
	public List<Products> deleteById(@PathVariable int product_id){
		Products p = ps.byid(product_id);
		if(p==null) 
			throw new RuntimeException("Not Exsisted !");
		ps.delete(product_id);
		return fetchAll();
	}
	@GetMapping("/search/{value}")
	public List<Products> check(@PathVariable String value) {
//		System.out.println(value);
		String regex = "[0-9]*";
		if(value.matches(regex)) {
			int data = Integer.parseInt(value);
			return searchAll(data);
		}
		else
			return searchAll(value);
	}
	
	public List<Products> searchAll(String data){
		List<Products> plist = ps.search(data);
		return plist;
	}
	public List<Products> searchAll(int data){
		List<Products> plist = ps.search(data);
		return plist;
	}
	@GetMapping("/count")
	public List<AdminCount> data() {
		List<AdminCount> acl = new ArrayList<AdminCount>();
		AdminCount ac = null;
		 ResultSet rs =  ps.cpuc();
		 try {
			while(rs.next()) {
				 ac=new AdminCount(rs.getInt(0),rs.getString(1),rs.getInt(2));
				 acl.add(ac);
			 }
		} catch (SQLException e) {
			e.printStackTrace();
		}
		 return acl;
	}
	@GetMapping("/any")
	public List<Products> checking(){
		List<Products> lp=ps.anySearch();
		return lp;
	}
	@GetMapping("/contains/{data}")
	public List<Products> containData(@PathVariable String data){
		List<Products> find =ps.allproducts();
		List<Products> result= new ArrayList<>();
		for(Products p:find) {
			if(p.getP_name().contains(data) || p.getP_desc().contains(data)) {
				result.add(p);
			}
		}return result;
	}
	public int getCatCount(int c_id){
		return ps.getCatCount(c_id);
	}
}
