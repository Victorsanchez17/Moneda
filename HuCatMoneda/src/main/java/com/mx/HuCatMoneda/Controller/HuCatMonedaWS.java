package com.mx.HuCatMoneda.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.HuCatMoneda.Dominio.HuCatMoneda;
import com.mx.HuCatMoneda.Service.HuCatMonedaService;

@RestController
@RequestMapping(path="/moneda")
@CrossOrigin
public class HuCatMonedaWS {

	@Autowired
	private HuCatMonedaService service;
	
	//EndPoint Alta
	@PostMapping(path="/alta")
	public ResponseEntity<?> guardarMoneda(@RequestBody HuCatMoneda huCatMoneda){
		HuCatMoneda nueva = service.save(huCatMoneda);
		return ResponseEntity.ok(nueva);
	}
	
	//EndPoint consulta
	@GetMapping(path="/consultar")
	public ResponseEntity<?> consultarMonedas(){
		List<HuCatMoneda> monedas = service.getAll();
		if(monedas.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(monedas);
		}	
	}
	
	//EndPoint editar
	@PostMapping(path="/editar")
	public ResponseEntity<?> editarMoneda(@RequestBody HuCatMoneda huCatMoneda){
		HuCatMoneda monedaAux = service.byId(huCatMoneda.getNumCia());
		if(monedaAux != null) {
			service.save(huCatMoneda);
			return ResponseEntity.status(HttpStatus.OK)
					.body("{\"Mensajes\":\"Se edito con exito la moneda: "+ huCatMoneda.getNumCia()+ " .\"}");
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Mensajes\":\"La moneda que intenta editar no existe.\"}");
		}
	}
	
	//EndPoint buscar por numCia
	@GetMapping(path="/buscar/{numCia}")
	public ResponseEntity<?> buscarMoneda(@PathVariable int numCia){
		HuCatMoneda moneda = service.byId(numCia);
		if(moneda != null) {
			return ResponseEntity.status(HttpStatus.OK).body(moneda);
		}else {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
	}
	
	//EndPoint eliminar
	@DeleteMapping(path="/eliminar/{numCia}")
	public ResponseEntity<?> eliminarMoneda(@PathVariable int numCia){
		service.delete(numCia);
		return ResponseEntity.noContent().build();
	}
}
