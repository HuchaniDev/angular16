import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './cunter/counter.module';


import { AppComponent } from './app.component';
import { HeroModel } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeroModel,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
