import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class ServiceHttp {

  constructor(private Http: HttpClient) {
  }

name:string
  getS() :string{
 this.Http.get("http://localhost:8080/api/priority").subscribe((name:string)=>this.name=name);
  return name;
  }

}
