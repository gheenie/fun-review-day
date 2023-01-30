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

    get stock() {
        return this.#stock;
    }
}

module.exports = VendingMachine;
