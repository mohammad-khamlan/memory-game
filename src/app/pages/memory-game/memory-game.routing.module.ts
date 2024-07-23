import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryGameComponent } from './containers/memory-game/memory-game.component';
import { GameReportComponent } from './components/game-report/game-report.component';

const routes: Routes = [
  { path: '', component: MemoryGameComponent },
  { path: 'gameReport', component: GameReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoryGameRoutingModule { }
