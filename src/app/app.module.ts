import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { CardComponent } from '../components/card/card.component';
import { ItemComponent } from '../components/item/item.component';
import { ItemsListComponent } from '../components/items-list/items-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    CardComponent,
    ItemComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
