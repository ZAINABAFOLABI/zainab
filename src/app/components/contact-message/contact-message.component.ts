import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { ContactState, ContactStateModel } from 'src/store/dashboard/states/contact/contact.state';
import {Observable} from 'rxjs';

export interface MessageData {
  name: string;
  email: string;
  phone: string;
  message: string;
}



/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'zainab-contact-message',
  templateUrl: './contact-message.component.html',
  styleUrls: ['./contact-message.component.css']
})
export class ContactMessageComponent implements OnInit{
  @Select(ContactState) contactMessages?: Observable<ContactStateModel>

  @Emitter(ContactState.getMessages)
  getMessages!: Emittable;

  displayedColumns: string[] = ['name', 'email', 'phone', 'message'];
  dataSource: MatTableDataSource<MessageData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.getMessages.emit();
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}



