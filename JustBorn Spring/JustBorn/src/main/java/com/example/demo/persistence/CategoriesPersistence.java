package com.example.demo.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.entity.Categories;
@RepositoryRestResource
public interface CategoriesPersistence extends JpaRepository<Categories, Integer> {

}
