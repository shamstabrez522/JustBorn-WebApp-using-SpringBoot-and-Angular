package com.example.demo.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.Userdata;

@RepositoryRestResource
public interface UserdataPersistence extends JpaRepository<Userdata, Integer> {
	@Query("select ud from Userdata ud where u_name = ?1 or u_type = ?1 or u_gender = ?1 or u_mailid = ?1")
	public List<Userdata> findUserdata(String data);

	@Query("select ud from Userdata ud where u_id = ?1 or u_phone = ?1")
	public List<Userdata> findUserdata(int data);
}
