import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CHEMICAL_ELEMENT_DATA, PeriodicElement } from './chemical-element.data';

@Component({
  selector: 'chemical-elements-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  /**
   * (1) The first thing we need to implement a @DataTable is a @DataSource ,
   *     the @DataSource contains the data that will be displayed.
   */
  dataSource = new MatTableDataSource<PeriodicElement>(CHEMICAL_ELEMENT_DATA);


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

