import { Routes } from '@angular/router';
import { ConsultarComponent } from './Componentes/consultar/consultar.component';
import { AltaComponent } from './Componentes/alta/alta.component';
import { ActualizarComponent } from './Componentes/actualizar/actualizar.component';

export const routes: Routes = [
    {
        path: 'consultar',
        component:ConsultarComponent
    },
    {
        path: 'alta',
        component:AltaComponent
    },
    {
        path: 'actualizar',
        component:ActualizarComponent
    }
];
