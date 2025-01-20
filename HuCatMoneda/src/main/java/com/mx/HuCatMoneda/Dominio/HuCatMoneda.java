package com.mx.HuCatMoneda.Dominio;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="HU_CAT_MONEDA")
@Data
public class HuCatMoneda {

	@Id
	private int numCia;
	private String claveMoneda;
	private String descripcion;
	private String simbolo;
	private String abreviacion;
	private String monedaCorriente;
	private String status;
	
}
