package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Cart;

public interface CartServiceDec {
	public List<Cart> allproducts();

	public List<Cart> byid(int u_id);

	public void insertandupdate(Cart cart);

	public void delete(int cart_id);
	
	public void deleteCart(int o_id);
	
	public int getCartCount(int u_id);
}
