import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  // con el activeRoute nos subscribimos a los cambios de la url
  constructor(
    private rutas: ActivatedRoute,
    private servicioPais: PaisService
  ) {}

  ngOnInit(): void {
    this.rutas.params
      .pipe(
        switchMap(({ id }) => this.servicioPais.buscarPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(
        pais=> this.pais = pais  );
    /*
    this.rutas.params.subscribe(({ id }) => {
      this.servicioPais.buscarPaisPorCodigo(id).subscribe((pais) => {
        console.log(pais);
      });
    });
*/
  }
}
