import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
