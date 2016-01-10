var Game = (function () {
    function Game(element, player) {
        this.element = element;
        this.cards = new Array();
        this.scoreBoard = 0;
        this.playerName = player;
        //this.idGenerator = new KeyGenerator();
        this.DrawCards();
    }
    Game.prototype.Play = function (C1, C2) {
        if (C1.IsSelected() && C2.IsSelected() && this.EqualCards(C1, C2)) {
            C1.setUnvisible();
            C2.setUnvisible();
            this.scoreBoard += 10;
        }
    };
    //This method checks if Card 1 and Card 2 are matches
    Game.prototype.EqualCards = function (C1, C2) {
        if (C1.id == C2.doubleID && C2.id == C1.doubleID)
            return true;
    };
    Game.prototype.DrawCards = function () {
        //TO DO :
    };
    //This method will reset the board and game
    Game.prototype.ClearBoard = function () {
        this.element = null;
        this.playerName = "";
        this.cards = new Array();
        //this.idGenerator: new KeyGenerator();
        this.scoreBoard = 0;
    };
    return Game;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Game(el, "Ola");
};
//# sourceMappingURL=Game.js.map