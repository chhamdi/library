package com.library.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.model.Livre;

@Repository
public interface LivreRepository extends JpaRepository<Livre, Long> {

	public List<Livre> findByCategorieNom(String categorieName) ;
	public Livre findByNom(String nom) ;
	
}
