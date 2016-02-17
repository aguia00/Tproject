class Card {
    height: number;
    weight: number;
    id: number;
    doubleID: number;
    element: HTMLElement;
    status: boolean;
    /*
    * Ao desenhar os cartoes devo colocar a imagem como background a branco se nao encontrar
    * o seu gemeo e apenas colocar a imagem quando for seleccionado o cartao
    * (Simular animacao) .
    *
    *
    *
    */
    // TODO : image variable .

    constructor() {
        this.element = $("<div class='card'></div>")[0];
    }

    private resize(w: number, h: number) {
        this.weight = w;
        this.height = h;
    }

    private setBackground(img: any) {
        this.element = img;
    }

    setUnvisible() {
        //set this.element como unvisible
    }

    private setStatus(newstatus: boolean) {
        this.status = newstatus;
    }

    private getStatus(newStatus: boolean) {
        return this.status;
    }

    IsSelected() {
        return this.status;
    }

    /*setImage(newImg: Image) {
    }*/
}