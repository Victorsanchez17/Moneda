import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WsService } from '../../Service/ws.service';
import { MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HuCatMoneda } from '../../Entidad/HuCatMoneda';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar',
  imports: [MatCardModule, MatTableModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent implements OnInit{

  constructor(private router: Router, private service: WsService){}

  monedas !: HuCatMoneda[];

  ngOnInit(): void {
      this.consultar();
  }

  consultar(){
    this.service.mostrarMoneda().subscribe(data =>{
      console.log(JSON.stringify(data));
      this.monedas = data;
    })
  }

  displayedColumns: string[] = ['numCia', 'claveMoneda', 'descripcion', 'simbolo', 'abreviacion', 'monedaCorriente', 'status', 'editar','eliminar'];

  actualizar(huCatMoneda: HuCatMoneda){
    localStorage.setItem('numCia', huCatMoneda.numCia.toString());
    this.router.navigate(['actualizar']);
  }

  eliminarMoneda(numCia: number): void{
    const tienda: HuCatMoneda = this.monedas.find(M => M.numCia === numCia)!;
    Swal.fire({
      title: "estas seguro?",
      text: "Esta accion no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: " si eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) =>{
      if(result.isConfirmed){
        this.service.eliminarMoneda(numCia).subscribe({
          next:() =>{
            this.consultar();
            Swal.fire("Eliminado", "La moneda ha sido eliminada correctamente", "success");
          },
          error: (err) =>{
            Swal.fire("Error", "no se pudo", "error");
          }
          
        });
      }
    })
  }
}
