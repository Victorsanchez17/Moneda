package com.mx.HuCatMoneda.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.HuCatMoneda.Dominio.HuCatMoneda;

public interface IHuCatMonedaDao extends JpaRepository<HuCatMoneda, Integer>{

}
