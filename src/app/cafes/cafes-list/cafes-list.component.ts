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
  
  cafes: Array<Cafe> | undefined;

  obtenerCafes() {
    this.cafeservice.obtenerCafes().subscribe(cafes=> {
      this.cafes = cafes;
    })
  }

  ngOnInit() {
    this.obtenerCafes();
  }

}
