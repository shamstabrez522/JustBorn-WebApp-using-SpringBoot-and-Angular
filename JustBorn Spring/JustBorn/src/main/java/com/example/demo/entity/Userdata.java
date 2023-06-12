package com.example.demo.entity;

import java.math.BigInteger;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="userdata")
public class Userdata {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="u_id")
	private Integer u_id;
	@Column(name="u_name")
	private String u_name;
	@Column(name="u_type")
	private String u_type;
	@Column(name="u_gender")
	private String u_gender;
	@Column(name="u_mailid")
	private String u_mailid;
	@Column(name="u_phone")
	private BigInteger u_phone;
	@Column(name="password")
	private String password;
	@OneToMany(mappedBy = "userData")
	private Set<Cart> cart;
	public Userdata() {}
	public Userdata(Integer u_id, String u_name, String u_type, String u_gender, String u_mailid, BigInteger u_phone,
			String password) {
		this.u_id = u_id;
		this.u_name = u_name;
		this.u_type=u_type;
		this.u_gender = u_gender;
		this.u_mailid = u_mailid;
		this.u_phone = u_phone;
		this.password = password;
	}
	public Integer getU_id() {
		return u_id;
	}
	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}
	public String getU_name() {
		return u_name;
	}
	public void setU_name(String u_name) {
		this.u_name = u_name;
	}
	public String getU_type() {
		return u_type;
	}
	public void setU_type(String u_type) {
		this.u_type = u_type;
	}
	public String getU_gender() {
		return u_gender;
	}
	public void setU_gender(String u_gender) {
		this.u_gender = u_gender;
	}
	public String getU_mailid() {
		return u_mailid;
	}
	public void setU_mailid(String u_mailid) {
		this.u_mailid = u_mailid;
	}
	public BigInteger getU_phone() {
		return u_phone;
	}
	public void setU_phone(BigInteger u_phone) {
		this.u_phone = u_phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Userdata [u_id=" + u_id + ", u_name=" + u_name + ", u_type=" + u_type + ", u_gender=" + u_gender + ", u_mailid=" + u_mailid
				+ ", u_phone=" + u_phone + ", password=" + password + "]";
	}
	
}
