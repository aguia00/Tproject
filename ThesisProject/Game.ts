class Game {
    element: HTMLElement;
    playerName: string;
    cards: Card[];
    idGenerator: KeyGenerator;
    scoreBoard: number;

    constructor(element: HTMLElement, player: string) {
        this.element = element;
        this.cards = new Array<Card>();
        this.scoreBoard = 0;
        this.playerName = player;
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

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Game(el, "Ola");
};