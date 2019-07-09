import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { peopleListComponent } from './people-list/people-list.component';
import { PersonSearchComponent } from './person-search/person-search.component';

@NgModule({
  declarations: [AppComponent, peopleListComponent, PersonSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
