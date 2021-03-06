﻿///<reference path='../ThesisProject/Card.ts'/>

class Game {
    element: HTMLElement;
    playerName: string;
    cards: Card[];
    idGenerator: KeyGenerator;
    scoreBoard: number;

    constructor() {
        this.cards = new Array<Card>();
        this.scoreBoard = 0;
        //this.idGenerator = new KeyGenerator();
        this.DrawCards();
    }

    private Play(C1: Card, C2: Card) {
        if (C1.IsSelected() && C2.IsSelected() && this.EqualCards(C1, C2)) {
            C1.setUnvisible();
            C2.setUnvisible();
            this.scoreBoard += 10;
        }
    }

    //This method checks if Card 1 and Card 2 are matches
    private EqualCards(C1: Card, C2: Card) {
        if (C1.id == C2.doubleID && C2.id == C1.doubleID)
            return true;
    }

    private DrawCards() {
        //TO DO :
        document.getElementById("gameBoard").appendChild($("<div class='card'></div>")[0]);
    }

    //This method will reset the board and game
    private ClearBoard() {
        this.element = null;
        this.playerName = "";
        this.cards = new Array<Card>();
        //this.idGenerator: new KeyGenerator();
        this.scoreBoard = 0;
    }
}

declare var $;
$(new Function("var game = new Game();"));