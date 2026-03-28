package com.apiListaContatos.api.controles;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.apiListaContatos.doman.entidades.Contato;
import com.apiListaContatos.doman.servicos.ContatoService;

@RestController
@RequestMapping("/contatos")
@CrossOrigin(origins = "*")
public class ContatoControler {

	@Autowired
	private ContatoService service;

	@GetMapping
	public List<Contato> buscaTodos() {
		return service.buscaTodos();
	}

	@GetMapping("/{id}")
	public Contato buscaPorId(@PathVariable Long id) {
		return service.buscaPorId(id);
	}

	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Contato salvar(@RequestBody Contato contato) {
		return service.salvar(contato);
	}

	@PutMapping("/{id}")
	public Contato atualizar(@PathVariable Long id, @RequestBody Contato contato) {
		return service.atualizar(id, contato);
	}

	@DeleteMapping("/{id}")
	public void deletar(long id) {
		service.deletar(id);
	}
}
