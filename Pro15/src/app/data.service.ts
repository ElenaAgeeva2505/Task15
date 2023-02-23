import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  role: 'user' | 'admin' = 'user';
  constructor(
    private http: HttpClient
  ) { }

  getCommentsId1(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      params: new HttpParams().set('id', id)
  });
  }

 
}
