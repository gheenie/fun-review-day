class VendingMachine {
    #credit = 0;
    #stock = {
        A : {},
        B : {},
        C : {},
    };
    
    constructor() {

    }

    get credit() {
        return this.#credit;
    }

    set credit(credit) {
        this.#credit = credit;
    }

    get stock() {
        return this.#stock;
    }

    set stock(credit) {
        this.#stock = credit;
    }
}

module.exports = VendingMachine;
