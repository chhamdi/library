package com.library.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.model.Categorie;
import com.library.service.CategorieService;


@RestController
@RequestMapping("/library")
public class CategorieController {
	
	@Autowired
	private CategorieService categorieService ;
	
	@PostMapping("/categories/make")
	public Categorie addCategorie(@Valid @RequestBody Categorie categorie) {
		return categorieService.addCategorie(categorie) ;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/categories")
	public List<Categorie> getCategories(){
		return categorieService.getCategories();
	}
	
	

}
