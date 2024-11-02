import { Component, OnInit } from '@angular/core';
import { CafesService } from '../cafes.service';
import { Cafe } from '../cafe'

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {

  constructor(private cafeservice: CafesService) { }
  
  cafes: Array<Cafe> = [];
  cafesOrigen: number = 0;
  cafesBlend: number = 0;  

  obtenerCafes() {
    this.cafeservice.obtenerCafes().subscribe(cafes=> {
      this.cafes = cafes;
      this.contarTipos();
    })
  }

  contarTipos() {
    for(let cafe of this.cafes){
      if(cafe.tipo == "Café de Origen"){
        this.cafesOrigen ++;
      } else if (cafe.tipo == "Blend"){
        this.cafesBlend ++;
      }
    }
  }
  
  ngOnInit() {
    this.obtenerCafes();
  }

}
