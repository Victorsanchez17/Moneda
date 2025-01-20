import { Component, OnInit } from '@angular/core';
import { HuCatMoneda } from '../../Entidad/HuCatMoneda';
import { Router } from '@angular/router';
import { WsService } from '../../Service/ws.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  imports: [FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit{

  moneda : HuCatMoneda = new HuCatMoneda();

  constructor(private router:Router, private service:WsService){}

  ngOnInit(): void {
      this.buscarMoneda();
  }

  buscarMoneda(){
    var numCia = Number(localStorage.getItem("numCia"));

    this.moneda.numCia = numCia;

    this.service.buscarMoneda(this.moneda.numCia).subscribe(data =>{
      console.log(JSON.stringify(data));
      this.moneda = data;
      Swal.fire({
        title: 'EDITAR',
        text: 'Moneda ' + this.moneda.numCia + " cargada exitosamente",
        icon: 'success',
        timer: 1500
      })
      
    })
  }

  actualizar(){
    this.service.actualizarMoneda(this.moneda).subscribe(data =>{
      console.log('Exito');
      Swal.fire({
        title: 'ACTUALIZAR',
        text: JSON.stringify(data),
        icon: 'success',
        timer: 2000
      }).then(() =>{
        this.router.navigate(['consultar']);
      })
    })
  }
}
