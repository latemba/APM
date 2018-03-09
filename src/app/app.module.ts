import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductlistComponent } from './products/productlist.component';
import { ProductFilterPipe } from './products/productfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
