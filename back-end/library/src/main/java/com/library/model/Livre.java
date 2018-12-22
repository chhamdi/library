package com.library.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "livre")
public class Livre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="livre_id")
	private long id ;
	
	@NotBlank
	private String nom ;
	
	@NotBlank
	private String auteur ;
	
	@NotBlank
	private String langue ;
	
	@NotBlank
	private String description ;
	
	@Min(0)
	private long nombre_page ;
	
	@NotBlank
	private String prix ;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name ="categorie", referencedColumnName ="categorie_id")
	private Categorie categorie ;
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getAuteur() {
		return auteur;
	}

	public void setAuteur(String auteur) {
		this.auteur = auteur;
	}

	public String getLangue() {
		return langue;
	}

	public void setLangue(String langue) {
		this.langue = langue;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getNombre_page() {
		return nombre_page;
	}

	public void setNombre_page(long nombre_page) {
		this.nombre_page = nombre_page;
	}

	public String getPrix() {
		return prix;
	}

	public void setPrix(String prix) {
		this.prix = prix;
	}
	
	
	
}
