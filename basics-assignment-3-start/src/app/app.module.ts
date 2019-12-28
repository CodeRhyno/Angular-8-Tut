import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AsgSolutionComponent } from './asg-solution/asg-solution.component';
import { ConsoleComponent } from './console/console.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    AsgSolutionComponent,
    ConsoleComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
