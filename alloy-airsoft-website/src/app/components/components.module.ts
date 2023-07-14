import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  exports: [
    TopBarComponent
  ],
  providers: [],
})
export class ComponentsModule { }
