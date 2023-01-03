import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import {TokenStorageService} from "../../../shared/services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private tokenStorageService: TokenStorageService
  ) { }


  createRequestToken():Observable<any>{
    return this.httpClient.post(environment.ApiBase4 + 'auth/request_token', {
      "redirect_to": `http://localhost:4200/login?approved=true`
    }, {
      headers: new HttpHeaders({
        'authorization': `Bearer ${environment.ApiReadToken}`
      })
    }).pipe(catchError(err => {throw err}))
  }

  createAccessToken():Observable<any>{
    return this.httpClient.post(environment.ApiBase4 + 'auth/access_token', {
      "request_token": this.tokenStorageService.getRequsetToken()
    }, {
      headers: new HttpHeaders({
        'authorization': `Bearer ${environment.ApiReadToken}`
      })
    }).pipe(catchError(err => {throw err}))
  }

  getAccountDetails(session_id: string):Observable<any>{
    return this.httpClient.get(environment.ApiBase + 'account?api_key=' + environment.ApiKey + '&session_id=' + session_id)
  }

  createSession(requestToken: string):Observable<any>{
    return this.httpClient.post(environment.ApiBase + 'authentication/session/new?api_key=' + environment.ApiKey,
      {
        "request_token": requestToken
      })
      .pipe(catchError(err => {throw err}))
  }
}
