import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { MemoryGameRoutingModule } from './memory-game.routing.module';
import { MemoryGameComponent } from './containers/memory-game/memory-game.component';
import { GameReportComponent } from './components/game-report/game-report.component';
import { BoardGameComponent } from './components/board-game/board-game.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { MemoryGameFacade } from './memory-game.facade';
import { MemoryGameState } from './state/memory-game-state';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
    declarations: [
        MemoryGameComponent,
        BoardGameComponent,
        GameReportComponent,
        FlipCardComponent
    ],
    providers: [
        MemoryGameFacade,
        MemoryGameState
    ],
    imports: [
        CommonModule,
        MemoryGameRoutingModule,
        NzGridModule,
        NzTableModule
    ]
})
    
export class MemoryGameModule { }
