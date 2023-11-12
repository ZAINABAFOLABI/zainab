import { Injectable} from '@angular/core';
import {NgxNotificationDirection, NgxNotificationMsgService, NgxNotificationStatusMsg} from "ngx-notification-msg";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  successData = new BehaviorSubject<{mainPageRoute: string, mainPage: string, image: string, title: string, subText: string} | undefined>(undefined)

  constructor(private http: HttpClient, private modal: MatDialog, private router: Router,
    private readonly ngxNotificationMsgService: NgxNotificationMsgService
    ) { }

    errorNotification(message: string) {
      this.ngxNotificationMsgService.open({
        status: NgxNotificationStatusMsg.FAILURE,
        header: 'Error',
        messages: [message],
        direction: NgxNotificationDirection.TOP_RIGHT
      });
    }

    notification(payload: {message: string, type: 'SUCCESS' | 'INFO'}) {
      this.ngxNotificationMsgService.open({
        status: NgxNotificationStatusMsg[payload.type],
        header: payload.type.toLowerCase(),
        messages: [payload.message],
        direction: NgxNotificationDirection.TOP_RIGHT,
        delay: 5000
      })
    }

    gotoSuccessPage(data: {mainPageRoute: string, mainPage: string, image: string, title: string, subText: string}) {
      this.successData.next({
        mainPageRoute: data.mainPageRoute, image: data.image, mainPage: data.mainPage, title: data.title, subText: data.subText});
      this.router.navigate(['/home/show-success'], {skipLocationChange: true});
    }
}
