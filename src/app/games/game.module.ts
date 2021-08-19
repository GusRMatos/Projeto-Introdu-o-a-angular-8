import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { GameInfoComponent } from "./game-info.component";
import { GameListComponent } from "./game-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations:[
        GameListComponent,
        GameInfoComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        AppPipeModule,
        StarModule,
        RouterModule.forChild([
            {
                path: 'games', component: GameListComponent
            },
            {
                path: 'games/info/:id', component: GameInfoComponent
            }
        ])
    ]
    
})
export class GameModule{

}