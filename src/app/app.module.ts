import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductlistComponent } from './products/productlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
