package com.example.demo.persistence;

import java.sql.ResultSet;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.controller.AdminCount;
import com.example.demo.entity.Products;
@RepositoryRestResource
public interface ProductsPersistence extends JpaRepository<Products,  Integer> {
//	@Query("select p from Products p where p_id = ?1 or p_name = ?1 or c_id = ?1 or bage = ?1 or p_price = ?1 or p_desc = ?1 or p_img = ?1 or a_quan = ?1")
//	public List<Products> findProducts(String data); 
	@Query("select p from Products p where p_name = ?1 or p_desc = ?1 or p_img = ?1")
	public List<Products> findProducts(String data); 
	@Query("select p from Products p where p_id = ?1 or c_id = ?1 or bage = ?1 or p_price = ?1 or a_quan = ?1")
	public List<Products> findProducts(int data);
	@Query("select p.c_id,c.c_list,count(p.a_quan) as p_count  from Products p right join Categories c on p.c_id=c.c_id group by p.c_id")
	public ResultSet countd();
	@Query("select count(*) from Products where c_id=?1")
	public int countCat(int c_id);
	@Query(value="select p from Products p where p_name like '%CHRISTMAS%'")
	public List<Products> findAny();
	
}
