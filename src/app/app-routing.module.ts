import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/memory-game/memory-game.module').then(m => m.MemoryGameModule),
    data: {
      title: "Memory Game",
      meta: "Flip 2 cards and it should be similar to get a point, and the game finished when all cards are flipped.",
      canonicalUrl: "http://localhost:4200"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
