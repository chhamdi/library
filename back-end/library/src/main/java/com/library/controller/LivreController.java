package com.library.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.model.Categorie;
import com.library.model.Livre;
import com.library.service.LivreService;

@RestController
@RequestMapping("/library")
public class LivreController {
	
	@Autowired
	private LivreService livreService ;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("categories/{categorieName}/livres")
	public List<Livre> getAll(@PathVariable String categorieName){
		return livreService.findBooks(categorieName) ;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("categories/livres")
	public List<Livre> getAllBooks(){
		return livreService.findAllBooks() ;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("livre/{nom}")
	public Livre getoneBook(@PathVariable String nom){
		return this.livreService.findOneBook(nom);
	}
	
	@PostMapping("categories/{categorieId}/ajouter")
	public Livre add(@PathVariable Long categorieId, @Valid @RequestBody Livre livre) {
		
		return livreService.addBook(categorieId, livre) ;
	}
	
	
	
	 
}
