package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Cart;
import com.example.demo.persistence.CartPersistence;

@Service
public class CartService implements CartServiceDec {
	private CartPersistence cp;

	@Autowired
	public CartService(CartPersistence cp) {
		this.cp = cp;
	}

	@Override
	@Transactional
	public List<Cart> allproducts() {

		return cp.findAll();
	}

	@Override
	@Transactional
	public List<Cart> byid(int u_id) {
		return cp.findAllByu_id(u_id);
	}

	@Override
	@Transactional
	public void insertandupdate(Cart cart) {
		cp.save(cart);

	}

	@Override
	@Transactional
	public void delete(int o_id) {
		cp.deleteById(o_id);
	}
	
	@Transactional
	public void deleteCart(int o_id) {
		cp.deleteByUId(o_id);
	}
	
	public int getCartCount(int u_id) {
		return cp.getCount(u_id);
	}
}
