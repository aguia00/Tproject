var Game = (function () {
    function Game(element) {
        this.element = element;
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Game.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Game.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Game;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Game(el);
    greeter.start();
};
//# sourceMappingURL=Game.js.map