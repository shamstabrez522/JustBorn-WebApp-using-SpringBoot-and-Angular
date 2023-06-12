package com.example.demo.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.Cart;
@RepositoryRestResource
public interface CartPersistence extends JpaRepository<Cart, Integer> {
	@Query(value="select c from Cart c where u_id=?1")
	public List<Cart> findAllByu_id(int u_id);
	@Query(value="delete from Cart c where 	u_id=?1")
	public void deleteByUId(int u_id);
	@Query(value="select count(c) from Cart c where u_id=?1")
	public int getCount(int u_id);
}
