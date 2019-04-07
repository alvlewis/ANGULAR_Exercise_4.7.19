import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// added... 
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, //don't forget comma
    FormsModule // added...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
