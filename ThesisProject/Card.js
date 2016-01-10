var Card = (function () {
    /*
    * Ao desenhar os cartoes devo colocar a imagem como background a branco se nao encontrar
    * o seu gemeo e apenas colocar a imagem quando for seleccionado o cartao
    * (Simular animacao) .
    *
    *
    *
    */
    // TODO : image variable .
    function Card(id, idD, w, h) {
        this.id = id;
        this.doubleID = idD;
        this.height = h;
        this.weight = w;
        this.status = true;
    }
    Card.prototype.resize = function (w, h) {
        this.weight = w;
        this.height = h;
    };
    Card.prototype.setBackground = function (img) {
        this.element = img;
    };
    Card.prototype.setUnvisible = function () {
        //set this.element como unvisible
    };
    Card.prototype.setStatus = function (newstatus) {
        this.status = newstatus;
    };
    Card.prototype.getStatus = function (newStatus) {
        return this.status;
    };
    Card.prototype.IsSelected = function () {
        return this.status;
    };
    return Card;
})();
//# sourceMappingURL=Card.js.map