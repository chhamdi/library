package com.library.service;

import java.util.List;
import java.util.Optional;

import com.library.model.Livre;

public interface LivreService {
	
	public List<Livre> findBooks(String categorieName) ;
	public List<Livre> findAllBooks() ;
	public Livre addBook(Long categorieId,Livre livre);
	public Livre findOneBook(String nom);


}
