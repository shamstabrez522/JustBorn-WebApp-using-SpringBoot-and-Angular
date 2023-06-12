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

import com.example.demo.entity.Categories;
import com.example.demo.service.CategoriesService;

@RestController
@RequestMapping("/categories")
public class CategoriesController {
	private CategoriesService cs;
	private ProductsController pc;

	@Autowired
	public CategoriesController(CategoriesService cs, ProductsController pc) {
		this.cs = cs;
		this.pc = pc;
	}

	@GetMapping("/categorieslist")
	public List<Categories> fetchAll() {
		List<Categories> cat = cs.allcategories();
		for (Categories c : cat) {
			c.setCount(pc.getCatCount(c.getC_id()));
		}
		return cat;
	}

	@GetMapping("/categorieslist/{category_id}")
	public Categories getId(@PathVariable int category_id) {
		Categories c = cs.byid(category_id);
		if (c == null)
			throw new RuntimeException("Not Exsisted !");
		return c;
	}

	@PostMapping("/categorieslist")
	public void insertCategories(@RequestBody Categories categories) {
		categories.setC_id(0);
		cs.insetandupdate(categories);
	}

	@PutMapping("/categorieslist")
	public void updateCategories(@RequestBody Categories Categories) {
		cs.insetandupdate(Categories);
	}

	@DeleteMapping("/categorieslist/{category_id}")
	public List<Categories> deleteById(@PathVariable int category_id) {
		Categories c = cs.byid(category_id);
		if (c == null)
			throw new RuntimeException("Not Exsisted !");
		cs.delete(category_id);
		return fetchAll();
	}
}
