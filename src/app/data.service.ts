import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IPerson } from './interfaces';

@Injectable()



export class DataService {
  PeopleURL = 'https://swapi.co/api/people/';
  private searchTerms = new Subject<string>();
  constructor(private http: HttpClient) {}
  
  ngOnInit() {}

  getPeople(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(this.PeopleURL).map(data => {
      return data['results'];
    });
  }

}
