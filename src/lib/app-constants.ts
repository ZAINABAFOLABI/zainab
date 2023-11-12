import {HttpHeaders} from '@angular/common/http';

export class AppConstants {

  static getNoTokenHeaders(retry = 'true', popupError = 'true'): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'No-Auth': 'true',
        TokenRefresh: 'false',
        retry,
        popupError
      })
    };
  }

  static RefreshTokenHttpHeaders(retry = 'true', popupError = 'true'): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'No-Auth': 'true',
        TokenRefresh: 'true',
        retry,
        popupError,
      })
    };
  }

  static getTokenHttpHeaders(retry = 'true', popupError = 'true'): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'No-Auth': 'true',
        retry,
        'popup-error': popupError
      })
    };
  }

  static getTransferHeaders(retry = 'true', pin:string, popupError = 'true'): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-transaction-pin': pin,
        'Access-Control-Allow-Origin': '*',
        'No-Auth': 'false',
        retry,
        'popup-error': popupError
      })
    };
  }

  static getTokenImageHttpHeaders(retry = 'true', popupError = 'true'): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'No-Auth': 'false',
        retry,
        'popup-error': popupError
      })
    };
  }
}
