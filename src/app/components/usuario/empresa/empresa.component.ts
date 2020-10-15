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
  displayedColumns: string[] = ['fecha', 'descripcion', 'valor', 'cantidad'];
  dataSource = new MatTableDataSource<factura>(facturas);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface factura{
  fecha: string;
  descripcion: string;
  valor: string;
  cantidad: string;
  
};

const facturas:factura[] = [
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  },
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  },
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  },
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  },
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  },
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  },
  {
    fecha: 'xx/xx/xxxx',
    descripcion: 'xxx',
    valor: 'xxxxxxx',
    cantidad:'xxx'
  }
];