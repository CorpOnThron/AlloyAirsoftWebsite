import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';
import { EventDetailsComponent } from './pages/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'main', component: MainComponent},
      { path: 'event-details', component: EventDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
