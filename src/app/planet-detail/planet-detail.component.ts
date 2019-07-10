import { Component, OnInit } from '@angular/core';
import { IPlanet } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../data.service';

@Component({
  selector: 'ngswapi-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  id: number;
  //selectedPlanet: Observable<IPlanet[]>;
  selectedPlanet: IPlanet[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.selectedPlanet = this.dataService.planet$;
  }
}
