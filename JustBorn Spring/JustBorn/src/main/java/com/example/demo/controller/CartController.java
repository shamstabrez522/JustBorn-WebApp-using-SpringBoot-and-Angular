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

import com.example.demo.entity.Cart;
import com.example.demo.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	private CartService cc;
	@Autowired
	public CartController(CartService cc) {
		this.cc=cc;
	}
	@GetMapping("/cartlist")
	public List<Cart> fetchAll(){
		return cc.allproducts();
	}
	@GetMapping("/cartlist/{cart_id}")
	public List<Cart> getId(@PathVariable int cart_id) {
		List<Cart> c = cc.byid(cart_id);
		if(c==null) 
			throw new RuntimeException("Not Exsisted !");
		return c;
	}
	@GetMapping("/cartcount/{u_id}")
	public int getCountById(@PathVariable int u_id) {
		return cc.getCartCount(u_id);
	}
	@PostMapping("/cartlist")
	public void insertCart(@RequestBody Cart cart) {
		cart.setO_id(0);
		cc.insertandupdate(cart);
	}
	@PutMapping("/cartlist")
	public void updateCart(@RequestBody Cart cart) {
		cc.insertandupdate(cart);
	}
	@DeleteMapping("/cartlist/{o_id}")
	public List<Cart> deleteById(@PathVariable int o_id){
		cc.delete(o_id);
		return fetchAll();
	}
	@DeleteMapping("/cartByUid/{u_id}")
	public void deleteByUId(@PathVariable int u_id){
		cc.deleteCart(u_id);
	}
}
