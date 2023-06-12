package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Categories;

public interface CategoriesServiceDec {

	public List<Categories> allcategories();

	public Categories byid(int category_id);

	public void insetandupdate(Categories categories);

	public void delete(int category_id);

}
