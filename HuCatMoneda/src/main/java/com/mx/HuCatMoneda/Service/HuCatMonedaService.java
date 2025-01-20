package com.mx.HuCatMoneda.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.mx.HuCatMoneda.Dao.IHuCatMonedaDao;
import com.mx.HuCatMoneda.Dominio.HuCatMoneda;

@Service
public class HuCatMonedaService {

	@Autowired
	private IHuCatMonedaDao dao;
	
	//Metodo para dar de alta
	public HuCatMoneda save(HuCatMoneda huCatMoneda) {
		HuCatMoneda nueva = dao.save(huCatMoneda);
		return nueva;
	}
		
	//Metodo para consulta moneda
	public List<HuCatMoneda> getAll(){
		return dao.findAll(Sort.by(Sort.Direction.ASC, "numCia"));
	}
	
	//Buscar por id
	public HuCatMoneda byId(int numCia) {
		return dao.findById(numCia).orElse(null);
	}
		
	//Metodo para eliminar
	public void delete(int numCia) {
		dao.deleteById(numCia);
	}
	
}
