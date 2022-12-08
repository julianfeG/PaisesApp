import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  
  public termino: string = '';
  public hayError: boolean = false;
  public capitales: Country[] = [];
  
  constructor( private paisService: PaisService ) {}

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe((capitales) =>{
        this.capitales = capitales;
      }, (err) => {
        this.hayError = true;
        this.capitales = [];
      });
  }

}
