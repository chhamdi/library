package com.library.service;

import java.util.List;

import com.library.model.Categorie;

public interface CategorieService {
	
	public Categorie addCategorie(Categorie categorie);
	public List<Categorie> getCategories() ;

}
