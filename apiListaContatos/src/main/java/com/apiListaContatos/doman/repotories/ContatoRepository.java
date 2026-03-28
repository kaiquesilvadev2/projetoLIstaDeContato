package com.apiListaContatos.doman.repotories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apiListaContatos.doman.entidades.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long>{

}
