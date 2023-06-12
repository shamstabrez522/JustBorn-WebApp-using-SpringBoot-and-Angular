package com.example.demo.entity;

import java.math.BigInteger;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cart")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer o_id;
	@Column(name="p_img")
	private String p_img;
	private String p_name;
	private Integer p_id;
	@Column(name="u_id")
	private Integer u_id;
	private String u_name;
	private BigInteger u_phone;
	private Integer qty;
	private Double p_price;
	@OneToOne(targetEntity = Products.class)
	@JoinColumn(name = "p_id", insertable = false, updatable = false)
	private Products products;
	@ManyToOne(targetEntity=Userdata.class,fetch = FetchType.EAGER)
	@JoinColumn(name="u_id",insertable = false,updatable = false)
	private Userdata userData; 

	public Cart() {
	}

	public Cart(Integer o_id, String p_img, String p_name, Integer p_id, Integer u_id, String u_name, BigInteger u_phone,
			Integer qty, Double p_price) {
		this.o_id = o_id;
		this.p_img = p_img;
		this.p_name = p_name;
		this.p_id = p_id;
		this.u_id = u_id;
		this.u_name = u_name;
		this.u_phone = u_phone;
		this.qty=qty;
		this.p_price = p_price;
	}

	public Integer getO_id() {
		return o_id;
	}

	public void setO_id(Integer o_id) {
		this.o_id = o_id;
	}

	public String getP_img() {
		return p_img;
	}

	public void setP_img(String p_img) {
		this.p_img = p_img;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public Integer getP_id() {
		return p_id;
	}

	public void setP_id(Integer p_id) {
		this.p_id = p_id;
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

	public BigInteger getU_phone() {
		return u_phone;
	}

	public void setU_phone(BigInteger u_phone) {
		this.u_phone = u_phone;
	}
	
	public Integer getQty() {
		return qty;
	}
	
	public void setQty(Integer qty) {
		this.qty=qty;
	}
	
	public Double getP_price() {
		return p_price;
	}

	public void setP_price(Double p_price) {
		this.p_price = p_price;
	}

	@Override
	public String toString() {
		return "Cart [o_id=" + o_id + ", p_img=" + p_img + ", p_name=" + p_name + ", p_id=" + p_id + ", u_id=" + u_id + ", u_name=" + u_name
				+ ", u_phone=" + u_phone +",qty="+ qty+ ", p_price=" + p_price + "]";
	}

}
