import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../interfaces';

@Component({
  selector: 'cm-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class peopleListComponent implements OnInit {
  @Input() people: IPerson[];

  selectedPerson: IPerson;
  onSelect(person: IPerson): void {
    this.selectedPerson = person;
  }
  constructor() {}

  ngOnInit() {}
}
