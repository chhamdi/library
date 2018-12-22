package com.library.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "categorie")
public class Categorie {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name ="categorie_id")
	private Long id ;
	
	@NotBlank
	private String nom ;
	

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	
	
	


	
	
	
	
}
