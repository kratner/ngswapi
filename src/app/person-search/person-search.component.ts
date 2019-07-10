import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  Router
} from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IPerson, IPlanet } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { DataService } from '../data.service';

import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
@Component({
  selector: 'ngswapi-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  //@Input() people: IPerson[];
  private searchTerms = new Subject<string>();
  people$: Observable<IPerson[]>;
  //planets$: Observable<IPlanet[]>;

  selectedPerson: IPerson;
  onSelect(person: IPerson): void {
    this.selectedPerson = person;
  }
  onPlanetSelect(href: string): void {
    const arrHref = href.split('/');
    const planetID = arrHref[arrHref.length - 2];
    this.dataService.planetHref = href;
    this.dataService
      .getPlanet()
      .map(result => {
        this.dataService.planet$ = result;
        this.router.navigate(['../', 'planets', planetID]);
      })
      .subscribe();
    /*
    this.dataService.planet = this.dataService
      .getPlanet(href)
      .subscribe(
        function(response) {
          console.log('Success Response' + response);
        },
        function(error) {
          console.log('Error happened' + error);
        },
        function() {
          this.router.navigate([
            '../',
            'planets',
            planetID
          ]);
        }
      );
    */
    //this.router.navigate(['../', 'planets', planetID]);

    /*
    this.router.navigate([crisis.id], {
      relativeTo: this.route
    });
    */
    //this.searchPlanets(planetHref);
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.people$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchPeople(term))
    );
  }

  searchPeople(term: string): Observable<IPerson[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http
      .get<IPerson[]>(
        `${this.dataService.PeopleURL}?search=${term}`
      )
      .map(data => {
        return data['results'];
      });
  }

  searchPlanets(href: string): Observable<IPlanet[]> {
    if (!href.trim()) {
      return of([]);
    }
    return this.http.get<IPlanet[]>(`${href}`).map(data => {
      return data['results'];
    });
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
