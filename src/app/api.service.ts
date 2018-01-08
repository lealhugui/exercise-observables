import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {IPosts} from "./posts";
 
 
 @Injectable()
 export class ApiService {

   private _postsURL = "https://jsonplaceholder.typicode.com/posts";

   constructor(private http: Http) {}

   getPosts(): Observable <IPosts[]> {
     return this.http
       .get(this._postsURL)
       .map((response: Response) => {
         return <IPosts[] > response.json();
       })
       .catch(this.handleError);
   }

   private handleError(error: Response) {
     return Observable.throw(error.statusText);
   }
 }

