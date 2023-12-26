import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Emittable, Emitter} from "@ngxs-labs/emitter";
import {Select, Store} from "@ngxs/store";
import { ContactModel, ContactState, ContactStateModel } from 'src/store/dashboard/states/contact/contact.state';
import { UtilityService } from 'src/app/utility/utility.service';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'zainab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sendingMessage = false;
  @Emitter(ContactState.sendMessage)
  contactMessage!: Emittable<any>
  // sendingMessage: boolean;

  constructor(
    // public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  contactMe(data:any){
    console.log("Contact form", data, data.value);
    this.sendingMessage = true;
    this.contactMessage.emit(data.value).subscribe(() =>{
      this.sendingMessage = false;
    })

  }

}
