package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Products {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="p_id")
	private Integer p_id;
	@Column(name="p_name")
	private String p_name;
	@Column(name="c_id")
	private Integer c_id;
	@Column(name="bage")
	private Integer bage;
	@Column(name="p_price")
	private Double p_price;
	@Column(name="p_desc")
	private String p_desc;
	@Column(name="p_img")
	private String p_img;
	@Column(name="a_quan")
	private Integer a_quan;
	@ManyToOne(targetEntity=Categories.class,fetch=FetchType.EAGER)
	@JoinColumn(name="c_id",insertable = false,updatable=false)
	private Categories categories;
	public Products() {}
	public Products(Integer p_id, String p_name, Integer c_id, Integer bage, Double p_price, String p_desc,
			String p_img, Integer a_quan) {
		super();
		this.p_id = p_id;
		this.p_name = p_name;
		this.c_id = c_id;
		this.bage = bage;
		this.p_price = p_price;
		this.p_desc = p_desc;
		this.p_img = p_img;
		this.a_quan = a_quan;
	}
	public Integer getP_id() {
		return p_id;
	}
	public void setP_id(Integer p_id) {
		this.p_id = p_id;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public Integer getC_id() {
		return c_id;
	}
	public void setC_id(Integer c_id) {
		this.c_id = c_id;
	}
	public Integer getBage() {
		return bage;
	}
	public void setBage(Integer bage) {
		this.bage = bage;
	}
	public Double getP_price() {
		return p_price;
	}
	public void setP_price(Double p_price) {
		this.p_price = p_price;
	}
	public String getP_desc() {
		return p_desc;
	}
	public void setP_desc(String p_desc) {
		this.p_desc = p_desc;
	}
	public String getP_img() {
		return p_img;
	}
	public void setP_img(String p_img) {
		this.p_img = p_img;
	}
	public Integer getA_quan() {
		return a_quan;
	}
	public void setA_quan(Integer a_quan) {
		this.a_quan = a_quan;
	}
	@Override
	public String toString() {
		return "Products [p_id=" + p_id + ", p_name=" + p_name + ", c_id=" + c_id + ", bage=" + bage + ", p_price="
				+ p_price + ", p_desc=" + p_desc + ", p_img=" + p_img + ", a_quan=" + a_quan + "]";
	}
	
}
