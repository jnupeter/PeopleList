import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PeopleComponent } from './people.component';
import { HttpModule } from '@angular/http';
import { PeopleService } from './people.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, PeopleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PeopleService]
})
export class AppModule { }
