import { Selector, State, StateContext} from '@ngxs/store';
import { EmitterAction, Receiver} from "@ngxs-labs/emitter";
import {Injectable, Injector} from "@angular/core";
import {tap} from "rxjs";
import {UtilityService} from "./utility.service";

export interface UtilityStateModel {
  status: Record<string, never>;
}

@State<UtilityStateModel>({
  name: 'utility',
  defaults: {
    status: {}
  }
})

@Injectable()

export class UtilityState {
  private static api: UtilityService;

  @Selector()
  public static getState(state: UtilityStateModel) {
    return state;
  }

  @Selector()
  public static getStatus(state: UtilityStateModel): any {
    return state.status;
  }
  constructor(injector: Injector) {
    UtilityState.api = injector.get<UtilityService>(UtilityService);
  }


  @Receiver()
  public static setStatus({patchState}: StateContext<UtilityStateModel>, {payload}: EmitterAction<Record<string, never>>) {
    patchState({status: payload});
  }

  @Receiver()
  public static removeStatus({patchState, getState}: StateContext<UtilityStateModel>, {payload}: EmitterAction<{ key: string }>) {
    const currStatusState = {...getState().status};
    delete currStatusState[payload.key];
    patchState({status: currStatusState});
  }

  @Receiver()
  static handleError(_: StateContext<any>, {payload}: EmitterAction<string>) {
    UtilityState.api.errorNotification(payload);
  }
  @Receiver()
  static handleNotification(_: StateContext<any>, {payload}: EmitterAction<{message: string, type: 'SUCCESS' | 'INFO'}>) {
    UtilityState.api.notification(payload);
  }



}
