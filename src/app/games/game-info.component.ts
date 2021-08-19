import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Game } from "./game";
import { GameService } from "./game.service";

@Component({
    templateUrl: './game-info.component.html'
})
export class GameInfoComponent implements OnInit{
    
    game: Game;

    constructor(private activatedRoute: ActivatedRoute, private gameService: GameService){ }

    ngOnInit(): void { 
        this.gameService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next:   game => this.game = game,
            error: err => console.log('Erro', err)
        });
    }

    save(): void{
        this.gameService.save(this.game).subscribe({
            next: game => console.log("Salvo com sucesso", game),
            error: err => console.log("Erro", err)
        });
    }
    
}