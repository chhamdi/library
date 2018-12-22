package com.library.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.model.Categorie;
import com.library.model.Livre;
import com.library.repository.CategorieRepository;
import com.library.repository.LivreRepository;
import com.library.service.LivreService;

@Service
public class LivreServiceImpl implements LivreService{

	@Autowired
	private LivreRepository livreRepository ;
	
	@Autowired
	private CategorieRepository categorieRepository;
	
	
	@Override
	public List<Livre> findBooks(String categorieName) {
		// TODO Auto-generated method stub
		return livreRepository.findByCategorieNom(categorieName)  ;
	}

	@Override
	public Livre addBook(Long categorieId, Livre livre) {
		Categorie categorie = categorieRepository.findById(categorieId).get() ;
		livre.setCategorie(categorie);
		return livreRepository.save(livre) ;
		
	}

	@Override
	public List<Livre> findAllBooks() {
		return livreRepository.findAll() ;
	}
	
	public Livre findOneBook(String nom) {
		return this.livreRepository.findByNom(nom);
	}
	
	
	

}
