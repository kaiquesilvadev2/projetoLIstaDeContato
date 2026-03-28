package com.apiListaContatos.doman.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.apiListaContatos.doman.entidades.Contato;
import com.apiListaContatos.doman.exceptions.IdNaoEncontradoException;
import com.apiListaContatos.doman.repotories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;

	public List<Contato> buscaTodos() {
		return repository.findAll();
	}

	public Contato buscaPorId(long id) {
		return repository.findById(id).orElseThrow(() -> new IdNaoEncontradoException(id + " id não encontrado"));
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	public Contato salvar(Contato contato) {

		Contato novoContato = new Contato();

		novoContato.setEmail(contato.getEmail());
		novoContato.setImg(contato.getImg());
		novoContato.setNome(contato.getNome());

		return repository.save(novoContato);
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	public Contato atualizar(long id, Contato contato) {

		Contato novoContato = buscaPorId(id);

		novoContato.setEmail(contato.getEmail());
		novoContato.setImg(contato.getImg());
		novoContato.setNome(contato.getNome());

		return repository.save(novoContato);
	}

	@Transactional(propagation = Propagation.SUPPORTS)
	public void deletar(long id) {

		buscaPorId(id);
		repository.deleteById(id);
	}
}
