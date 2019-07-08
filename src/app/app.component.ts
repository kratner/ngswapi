import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'swpp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Star Wars People and Planets';
  people: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getPeople()
      .subscribe(data => (this.people = data));
  }
}
