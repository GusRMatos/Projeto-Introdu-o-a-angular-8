import { Component, OnInit } from "@angular/core";
import { Game } from "./game";
import { GameService } from "./game.service";

@Component({
    templateUrl: './game-list.component.html'
})
export class GameListComponent implements OnInit{
    
    filteredGames: Game[] = [];    

    _games: Game[] = [];

    _filterBy: string;

    constructor(private gameService: GameService){}

    ngOnInit(): void { 
        this.retrieveAll();
    }
    retrieveAll(): void { 
        this.gameService.retrieveAll().subscribe({
            next: games => {
                this._games = games;
                this.filteredGames = this._games;
            },
            error: err => console.log('Erro', err) 
        })
    }

    deleteById(gameId: number): void{
        this.gameService.deleteById(gameId).subscribe({
            next: () => {
                console.log('Deletado com sucesso!'),
                this.retrieveAll();
            },
            error: err => console.log('Erro', err)
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredGames = this._games.filter((game: Game) => game.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
        this.filteredGames = this._games.filter((game: Game) => game.manufacturer.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
        
    }

    get filter(){
        return this._filterBy;
    }
}