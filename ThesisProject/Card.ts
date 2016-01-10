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

    constructor(id: number, idD: number, w: number, h: number) {
        this.id = id;
        this.doubleID = idD;
        this.height = h;
        this.weight = w;
        this.status = true;
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