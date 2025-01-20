import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HuCatMoneda } from '../Entidad/HuCatMoneda';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor(private http: HttpClient) { }

  url="http://localhost:8030/moneda";

  //consultar
  mostrarMoneda(){
    return this.http.get<HuCatMoneda[]>(this.url + "/consultar");
  }

  //alta
  guardarMoneda(huCatMoneda: HuCatMoneda){
    return this.http.post<String>(this.url + "/alta", huCatMoneda);
  }

  //buscar
  buscarMoneda(numCia: number) {
    return this.http.get<HuCatMoneda>(`${this.url}/buscar/${numCia}`);
  }

  //editar
  actualizarMoneda(huCatMoneda: HuCatMoneda){
    return this.http.post<String>(this.url + "/editar", huCatMoneda);
  }

   //eliminar
   eliminarMoneda(numCia: number){
    return this.http.delete(`${this.url}/eliminar/${numCia}`, {
      body: HuCatMoneda  // se envia correctamente al cuerpo
    })
  }
}
