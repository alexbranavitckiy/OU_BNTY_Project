import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {User} from "./User";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class Services {

  constructor(private http: HttpClient) {
  }

  name: string
  user: User;

  getS(): User {
    this.http.get('http://localhost:8080/api/priority/all').subscribe((data:User)=>(this.user=data))
    return this.user;
  }



}
