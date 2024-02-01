import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Emittable, Emitter} from "@ngxs-labs/emitter";
import {Select, Store} from "@ngxs/store";
import emailjs from '@emailjs/browser';
import { ContactModel, ContactState, ContactStateModel } from 'src/store/dashboard/states/contact/contact.state';
import { UtilityService } from 'src/app/utility/utility.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../model/contact';
// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'zainab-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form:FormGroup = this.fb.group({
    receiver:'Admin',
    sender: '',
    phone: '',
    email: '',
    message: ''
  })

  model = new Contact('Your full name ', 'Your email ', 'Your phone',' Your message here ...');

  sendingMessage = false;
  @Emitter(ContactState.sendMessage)
  contactMessage!: Emittable<any>
  // sendingMessage: boolean;

  constructor(private fb:FormBuilder
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

  newContact() {
    this.model = new Contact('', '','','');
  }

 async send(data:any){
    // console.log(data.value.email)
    // console.log(data.value.sender)
    // console.log(data.value.phone)
    // console.log(data.value.message)
    emailjs.init('Ikv7djWT9RQ9hXV8-')
   let response = await emailjs.send("service_rmvtowv","template_1mvgunp",{
    receiver:'Zainab',
    sender: data.value.sender,
    email: data.value.email,
    phone: data.value.phone,
    message: data.value.message,
    });
    alert('Message has been sent.');
    // data.value.reset();
    // this.newContact();



  }



}
