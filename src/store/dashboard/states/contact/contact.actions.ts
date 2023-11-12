import { ContactStateModel } from './contact.state';

export class SetContact {
  public static readonly type = '[SetContact] action';
  constructor(public payload: ContactStateModel) {}
}




