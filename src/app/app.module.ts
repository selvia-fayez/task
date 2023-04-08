import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealComponent } from './Components/deal/deal.component';
import { DealsComponent } from './Components/deals/deals.component';
import { StagesComponent } from './Components/stages/stages.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DealComponent,
    DealsComponent,
    StagesComponent,
    NavbarComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
