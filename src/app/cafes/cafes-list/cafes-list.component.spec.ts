/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CafesListComponent } from './cafes-list.component';
import { CafesModule } from '../cafes.module';
import { faker } from '@faker-js/faker';
import { Cafe } from '../cafe'

describe('CafesListComponent', () => {
  let component: CafesListComponent;
  let fixture: ComponentFixture<CafesListComponent>;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CafesModule, HttpClientModule],
      declarations: [ CafesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesListComponent);
    component = fixture.componentInstance;

    const cafesPrueba = [];

    for(let i=0; i < 3; i++){
      const FakeCafe = new Cafe(
        faker.number.int(),
        "Café Especial " + faker.food.ingredient(),
        faker.food.description(),
        faker.location.city.name,
        faker.food.description(),
        faker.number.int(),
        faker.image.url()
      )
      cafesPrueba.push(FakeCafe)
    };

    component.cafes = cafesPrueba;


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener 4 filas', () => {
    let listacafes = debug.queryAll(By.css('tr'));
    expect(listacafes.length).toEqual(4);
  });  

  it('La primera fila debe corresponder a los encabezados',()=>{
    let listacafes = debug.queryAll(By.css('tr'));
    let primeraFila = listacafes[0].queryAll(By.css('th'));
    let encabezadosTabla = ["#","Nombre","Tipo","Region"];
    for(let i=0;i<4;i++){
      expect(primeraFila[i].nativeElement.textContent).toEqual(encabezadosTabla[i]);
    }
  });

  it('El contenido de las filas 2 a 4 debe coincidir con los cafes del ejemplo',()=>{
    let listacafes = debug.queryAll(By.css('tr'));
    for(let f=0;f<3;f++){
      let fila = listacafes[f+1].queryAll(By.css('td'));
      expect(fila[0].nativeElement.textContent).toEqual(component.cafes[f].nombre);
      expect(fila[1].nativeElement.textContent).toEqual(component.cafes[f].tipo);
      expect(fila[2].nativeElement.textContent).toEqual(component.cafes[f].region);
    };

  });

});
