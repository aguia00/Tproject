class Game {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    playerName: string;

    constructor(element: HTMLElement) {
        this.element = element;

        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Game(el);
    greeter.start();
};