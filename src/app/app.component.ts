import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'AppMoneda';

  constructor(private router:Router){}

  consultar(){
    this.router.navigate(['consultar']);
  }

  alta(){
    this.router.navigate(['alta']);
  }

  actualizar(){
    this.router.navigate(['actualizar']);
  }

}
