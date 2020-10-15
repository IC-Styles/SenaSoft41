import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<inventario>(productos);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface inventario{
  nombre: string;
  descripcion: string;
  img: string;
  precio: string;
  cantidad: string;
  idx?: number;
};

const productos:inventario[] = [
  {
    nombre: 'p1',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  },
  {
    nombre: 'p2',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  },
  {
    nombre: 'p3',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  },
  {
    nombre: 'p4',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  },
  {
    nombre: 'p5',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  },
  {
    nombre: 'p6',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  },
  {
    nombre: 'p7',
    descripcion: 'xxx',
    img: 'assets/img/ER-Hackathon.png',
    precio: 'xxx',
    cantidad:'xxx'
  }
];