import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetContact } from './contact.actions';
import { Injectable, Injector } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { ContactService } from './contact.service';
import {ResponseService} from 'src/app/utility/response.service' ;
import { UtilityService } from 'src/app/utility/utility.service';
import { tap } from 'rxjs';

export interface ContactModel {
  email: string;
  name: string;
  message: string;
  phone: string;
}

export interface ContactStateModel{
  data: ContactModel[];
  selected?: ContactModel;
  loading?: boolean;
}

@State<ContactStateModel>({
  name: 'contact',
  defaults: {
    data: []
  }
})


@Injectable()
export class ContactState {
  private static api:ContactService;
  private static utilityService:UtilityService;
  @Selector()
  public static getContact(state: ContactStateModel): ContactStateModel {
    return state;
  }

  constructor(injector: Injector) {
    ContactState.api = injector.get<ContactService>(ContactService);
    ContactState.utilityService = injector.get<UtilityService>(UtilityService);
  }

  @Receiver()
  static sendMessage(_ctx: StateContext<ContactStateModel>, {payload}: EmitterAction<any>){
    console.log(payload)
    return this.api.sendMessage(payload)
    // .pipe(
    //   tap(res =>{
    //     this.utilityService.gotoSuccessPage({
    //       mainPageRoute: '/home',
    //       image: './assets/images/teacher.svg',
    //       mainPage: 'Invoices',
    //       title: 'All Done!',
    //       subText: `Your message has been sent successfully.`
    //     });
    //   }),
    //   ResponseService.handleStateError(ctx)
    // )
  }



  // @Action(SetContact)
  // public setContact(ctx: StateContext<ContactStateModel>, { payload }: SetContact) {
  //   ctx.setState(payload);
  // }
}
