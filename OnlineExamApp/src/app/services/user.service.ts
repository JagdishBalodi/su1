import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { UserInfo } from '../Models/userInfo';
import { ResponseModel } from '../Models/Response';


@Injectable()
export class UserService {
  private url = "http://localhost:36532/api/registration";
  ;

  constructor(private _http: HttpClient) {

  }
  public getUser(): Observable<UserInfo[]> {
    const responseObs: Observable<any> = this._http.get(this.url);
    const convertLogic = map((responseJsonArray: any) => <UserInfo[]>responseJsonArray);
    const userObs: Observable<UserInfo[]> = responseObs.pipe(convertLogic);
    return userObs;
  }
  public addUser(user: UserInfo): Observable<ResponseModel> {
    const responseObs: Observable<any> = this._http.post(this.url, user);
    return responseObs.pipe(map((resp: any) => <ResponseModel>resp))
  }

}