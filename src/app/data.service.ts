import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { IPerson, IPlanet } from './interfaces';

@Injectable()
export class DataService {
  PeopleURL = 'https://swapi.co/api/people/';
  PlanetsURL = 'https://swapi.co/api/planets/';
  private searchTerms = new Subject<string>();
  constructor(private http: HttpClient) {}
  //public planet: Observable<IPlanet[]>;
  public planet$: IPlanet[];
  public planetHref: string;
  ngOnInit() {}

  getPeople(): Observable<IPerson[]> {
    return this.http
      .get<IPerson[]>(this.PeopleURL)
      .map(data => {
        return data['results'];
      });
  }
  getPlanet(): Observable<IPlanet[]> {
    return this.http
      .get<IPlanet[]>(this.planetHref)
      .map(data => {
        return data;
      });
  }
  getPeopleById(id: string): Observable<IPerson[]> {
    if (!id.trim()) {
      return of([]);
    }
    return this.http
      .get<IPerson[]>(this.PeopleURL + id)
      .map(data => {
        return data['results'];
      });
  }
}
