import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

 termino:string = 'Hola Mundo';
 hayError:boolean = false;
 paises: Country[] = [];

   constructor(private paisService: PaisService) { }

   buscar() {
     this.hayError = false;
     // como hemos puesto en el servicio que retorne un observable
     // aquí nos subscribimos para recibir la respuesta
     this.paisService.buscarPais(this.termino)
     .subscribe(paises => { this.paises = paises },
     (err ) => {
       this.hayError = true;
       this.paises = [];
       // console.info(err);
     }
     );
   }

}
