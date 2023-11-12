import { Injectable } from '@angular/core';
import {StateContext} from "@ngxs/store";
import {catchError} from "rxjs/operators";
import {Emittable, Emitter} from "@ngxs-labs/emitter";
import {EMPTY, OperatorFunction} from "rxjs";
import { UtilityState } from './utility.state';

@Injectable({
  providedIn: 'root'
})
export class ResponseService{
  @Emitter(UtilityState.handleError)
  static handleError: Emittable<string>;

  @Emitter(UtilityState.handleNotification)
  private static notify: Emittable<{type: 'SUCCESS' | 'INFO', message: string}>;

  constructor(){}
  public static handleStateError(ctx: StateContext<any>): OperatorFunction<any, any> {
    return catchError((err, caught) => {
      ctx.patchState({loading: false});
      if(ctx.getState().itemLoading){
        ctx.patchState({...ctx.getState().data, itemLoading: false});
      }
      ResponseService.handleError.emit(err?.message || 'An error occurred')
      return EMPTY;
    })
  }

  public static handleGeneralApiError(err: any){
    ResponseService.handleError.emit(err?.message || 'An error occurred')
  }

  public static handleNotification(ctx: StateContext<any>, type: 'SUCCESS' | 'INFO', message: string) {
    ctx.patchState({loading: false});
    if(ctx.getState().itemLoading){
      ctx.patchState({...ctx.getState().data, itemLoading: false});
    }
    ResponseService.notify.emit({type, message});
  }

}
