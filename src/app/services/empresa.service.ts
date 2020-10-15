import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private productos:inventario[] = [
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
  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():inventario[]{
    return this.productos;
  }

  getHeroe( idx: string ){
    return this.productos[idx];
  }

  buscarHeroes( termino:string ):inventario[]{

    let productosArr:inventario[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.productos.length; i ++ ){

      const producto = this.productos[i];

      const nombre = producto.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        producto.idx = i;
        productosArr.push( producto )
      }

    }

    return productosArr;

  }


}


export interface inventario{
  nombre: string;
  descripcion: string;
  img: string;
  precio: string;
  cantidad: string;
  idx?: number;
};
