package com.library.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.model.Categorie;
import com.library.repository.CategorieRepository;
import com.library.service.CategorieService;

@Service
public class CategorieServiceImpl implements CategorieService {

	@Autowired
	private CategorieRepository categorieRepository ;
	
	@Override
	public Categorie addCategorie(Categorie categorie) {
		// TODO Auto-generated method stub
		return categorieRepository.save(categorie)  ;
	}
	
	public List<Categorie> getCategories(){
		return categorieRepository.findAll();
	}
	
	

}
