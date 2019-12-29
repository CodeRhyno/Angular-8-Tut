import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { ScoreComponent } from './score/score.component';
import { EvenScoreComponent } from './score/even-score/even-score.component';
import { OddScoreComponent } from './score/odd-score/odd-score.component';
import { StartGameComponent } from './game-control/start-game/start-game.component';
import { StopGameComponent } from './game-control/stop-game/stop-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    ScoreComponent,
    EvenScoreComponent,
    OddScoreComponent,
    StartGameComponent,
    StopGameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
