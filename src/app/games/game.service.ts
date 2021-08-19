import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Game } from "./game";

@Injectable({
    providedIn: 'root'
})
export class GameService{

    private gameUrl: string = 'http://localhost:3100/api/games';
    constructor(private httpClient: HttpClient){ }

    retrieveAll(): Observable<Game[]>{
        return this.httpClient.get<Game[]>(this.gameUrl);
    }

    retrieveById(id: number): Observable<Game>{
       return this.httpClient.get<Game>(`${this.gameUrl}/${id}`);
    }

    save(game: Game): Observable<Game> { 
        if(game.id) { 
            return this.httpClient.put<Game>(`${this.gameUrl}/${game.id}`, game);
        } else { 
            return this.httpClient.post<Game>(`${this.gameUrl}`, game);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.gameUrl}/${id}`);
    }
}
