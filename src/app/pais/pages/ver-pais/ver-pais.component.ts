import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais: any;
  paises: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
    ) {    }

  ngOnInit(): void {

    
    /*this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.PaisService.getPaisPorAlpha(id)),
        tap((resp)=>console.log(resp,'aca estoy'))
      )
      .subscribe(pais =>this.pais=pais);*/

      //Otra forma que hace lo mismo
    this.activatedRoute.params
      .subscribe(({id}) => {
        console.log(id);

        this.PaisService.getPaisPorAlpha(id)
          .subscribe(pais => {
            this.pais = pais;
            this.paises = 'xd';
            console.log(this.pais,this.pais.area);
          });

      });
    
  }

}
