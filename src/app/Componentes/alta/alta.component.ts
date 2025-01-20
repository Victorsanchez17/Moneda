import { Component } from '@angular/core';
import { HuCatMoneda } from '../../Entidad/HuCatMoneda';
import { Router } from '@angular/router';
import { WsService } from '../../Service/ws.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  moneda : HuCatMoneda = new HuCatMoneda();

  constructor(private router: Router, private service: WsService){}

alta(){
    this.service.guardarMoneda(this.moneda).subscribe(data =>{
      console.log(JSON.stringify(data));
      Swal.fire({
        title: "¡GUARDAR!",
        text: JSON.stringify(data),
        icon: "success"
      }).then(() =>{
        this.router.navigate(['consultar']);
      }) ;
      
    }, (error: HttpErrorResponse) =>{
      Swal.fire({
        title: "¡GUARDAR!",
        text: JSON.stringify(error.error.Mensaje),
        icon: "error"
      })
    })
  }
}
